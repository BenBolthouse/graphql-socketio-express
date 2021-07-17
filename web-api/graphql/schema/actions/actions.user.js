const queries = `
    getUserById(id: Int): User
`;

const mutations = `
    createUser(input: NewUserInput): User
`;

module.exports = { queries, mutations };
