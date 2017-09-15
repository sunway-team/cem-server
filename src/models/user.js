import { Model } from 'objection';
import bcrypt from 'bcryptjs';
import config from '../config';
import commonUtils from '../utils/common';
import Permission from './permission';
import PersonalSchedule from './personalSchedule';
import Conference from './conference';
import ActivityFeedback from './activityFeedback';

// Import the plugin.
// TODO: Remember to add unique back to the class definition
const unique = require('objection-unique')({
  fields: ['email'],
  identifiers: ['id'],
});

export default class User extends unique(Model) {
  static tableName = 'users';
  static jsonSchema = {
    type: 'object',
    required: ['firstname', 'lastname', 'email', 'password', 'gender'],
    properties: {
      id: { type: 'number' },
      firstname: { type: 'string', maxLength: '100' },
      lastname: { type: 'string', maxLength: '255' },
      email: {
        type: 'string',
        format: 'email',
        minLength: '5',
        maxLength: '100',
      },
      password: { type: 'string' },
      gender: {
        type: 'string',
        enum: ['male', 'female', 'unknown'],
        default: 'not-set',
      },
      dob: { type: ['string', 'null'] },
      version_key: { type: 'string' },
    },
  };
  async $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();

    this.password = await bcrypt.hash(this.password, config.saltFactor);
    this.version_key = await bcrypt.hash(
      commonUtils.randomStr(),
      config.saltFactor,
    );
  }
  async $beforeUpdate() {
    this.updated_at = new Date().toISOString();
    if (this.password) {
      this.password = await bcrypt.hash(this.password, config.saltFactor);
      this.version_key = await bcrypt.hash(
        commonUtils.randomStr(),
        config.saltFactor,
      );
    }
  }
  async checkPassword(password) {
    const passwordMatch = await bcrypt.compare(password, this.password);
    return passwordMatch;
  }
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, config.saltFactor);
  }

  // delete all permission of user with id
  async deletePermissions() {
    const permissions = await Permission.query().where('user_id', this.id);

    if (permissions) {
      await Permission.query()
        .delete()
        .where('user_id', this.id);
    }

    return permissions;
  }

  // delete all personal schedule of user with id
  async deletePersonalSchedule() {
    const personalSchedules = await PersonalSchedule.query().where(
      'user_id',
      this.id,
    );

    if (personalSchedules) {
      await PersonalSchedule.query()
        .delete()
        .where('user_id', this.id);
    }

    return personalSchedules;
  }

  // delete all conferences of user with id
  async deleteConferences() {
    const conferences = await Conference.query().where('user_id', this.id);

    if (conferences) {
      await Conference.query()
        .delete()
        .where('user_id', this.id);
    }

    return conferences;
  }

  // delete all feedback of user with id
  async deleteActivityFeedback() {
    const activityFeedback = await ActivityFeedback.query().where(
      'user_id',
      this.id,
    );

    if (activityFeedback) {
      await ActivityFeedback.query()
        .delete()
        .where('user_id', this.id);
    }

    return activityFeedback;
  }
}
