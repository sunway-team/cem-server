import { Model } from 'objection';
import PaperTopic from '../paper/paperTopic';
import User from '../authorization/user';

export default class Paper extends Model {
  static tableName = 'papers';
  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'title'],
    properties: {
      id: { type: 'integer' },
      user_id: { type: 'integer' },
      conference_id: { type: 'integer' },
      speaker_name: { type: 'string' },
      title: { type: 'string' },
      abstract: { type: 'text' },
      keywords: { type: 'string' },
      file: { type: 'text' },
    },
  };

  async $beforeInsert() {
    this.created_at = new Date();
    this.updated_at = new Date();
    const user = await User.query().where('id', this.user_id);
    this.speaker_name = `${user[0].firstname} ${user[0].lastname}`;
  }

  async $beforeUpdate() {
    this.updated_at = new Date();
  }

  async $beforeValidate(opt) {
    this.id = parseInt(opt.old.id, 10);
    this.user_id = parseInt(opt.old.user_id, 10);
    this.conference_id = parseInt(opt.old.conference_id, 10);
  }

  // delete all topic of paper with id
  async deletePaperTopic() {
    const paperTopic = await PaperTopic.query().where('paper_id', this.id);

    if (paperTopic)
      await PaperTopic.query()
        .delete()
        .where('paper_id', this.id);
    return paperTopic;
  }

  async deleteAllRelationship() {
    this.deletePaperTopic();
  }
}
