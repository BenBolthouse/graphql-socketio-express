const config = require('../config');
const schema = require('./schema');
const resolvers = require('./resolvers');

module.exports = {
    resolvers,
    schema,
    graphiql: config.env === 'development',
};
