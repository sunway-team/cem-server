export default `
type Following {
  # The ID of relationship
  id: ID!

  follower_id: ID!

  follower: User!

  following_id: ID!

  user: User!

  conference_id: ID!

  # Conference
  conference: Conference!

  firstname: String!

  lastname: String!

  avatar: String

  followers_count: Int!

}

extend type Query {

  getFollowings(user_id: ID): [Following!]!

}

extend type Mutation {

}
`;
