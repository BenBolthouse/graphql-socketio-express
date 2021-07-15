/**
 * Container path: /usr/src/app/server.js
 * Project path: /server.js
 */

const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const aboutRoutes = require('./routes/routes.about');

/**
 * Express application object with middleware configuration.
 */
const server = express();

server.use(morgan('dev'));

server.use(`/v${config.version}`, aboutRoutes);

module.exports = server;
