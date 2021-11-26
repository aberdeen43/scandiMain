const { gql } = require("apollo-server");

module.exports = gql`
    type List{
        id: ID!
        name: String!
        image: String!
        body: String!
    }
    type Query {
        getLists: [List]
    }
`;