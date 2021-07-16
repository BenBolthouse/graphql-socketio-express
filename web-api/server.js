/**
 * Container path: /usr/src/app/server.js
 * Project path: /server.js
 */

const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const aboutRoutes = require('./routes/routes.about');

const graphqlConfig = require('./graphql');

/**
 * Express application object with middleware configuration.
 */
const server = express();

server.use(morgan('dev'));

// GraphQL endpoint
server.use(`/v${config.version}/graphql`, graphqlHTTP(graphqlConfig));

// About service endpoint
server.use(`/v${config.version}`, aboutRoutes);

module.exports = server;
