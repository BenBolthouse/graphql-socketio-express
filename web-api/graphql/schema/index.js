const { buildSchema } = require('graphql');

const userActions = require('./actions/actions.user');
const userType = require('./types/types.User');

const queries = [
    userActions.queries,
].join('');

const mutations = [
    userActions.mutations,
].join('');

const types = [
    userType,
].join('');

const query = `type Query { ${queries} }`;
const mutation = `type Mutation { ${mutations} }`;

const schema = buildSchema(query + mutation + types);

module.exports = schema;
