module.exports = `
    type User {
        id: Int
        username: String
        firstName: String
        lastName: String
        createdAt: String
        updatedAt: String
        revokedAt: String
    }
    input NewUserInput {
        username: String!
        email: String!
        password: String!
    }
`;
