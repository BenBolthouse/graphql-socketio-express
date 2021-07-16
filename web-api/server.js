const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const aboutRoutes = require('./routes/routes.about');

const { graphiql, resolvers, schema } = require('./graphql');

/**
 * Express application object with middleware configuration.
 */
const server = express();

server.use(morgan('dev'));

// GraphQL endpoint
server.use(`/v${config.version}/graphql`, graphqlHTTP({
    rootValue: resolvers,
    schema,
    graphiql,
}));

// About service endpoint
server.use(`/v${config.version}`, aboutRoutes);

module.exports = server;
