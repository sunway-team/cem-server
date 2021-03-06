export default `
type Room {
  # The ID of Room
  id: ID!

  # name of Room
  name: String!

  # number of seats
  seats: Int!

  # status of Room
  status: Status!

  # conference
  conference: Conference!

  # schedules
  schedules: [Schedule!]!

}

extend type Query {
  # Get information about all Room
  getAllRooms: [Room!]!

  # Get Room by ID
  getRoomByID(id: ID!): Room!

  # Get Room with Status On
  getRoomsByStatusInConference(status: Status!): [Room!]!

  # get room by conference id
  getRoomsByConferenceID: [Room!]!

}

extend type Mutation {
  # Insert new Room
  insertRoomInConference(name: String!, seats: Int! ,status: Status): Room!

  # Update Room info by id
  updateRoomInConference(id:ID!, name: String, seats: Int, status: Status ): Room!

  # Delete Room by id
  deleteRoom(id: ID!): Room!
}
`;
