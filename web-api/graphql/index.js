const { buildSchema } = require('graphql');
const fs = require('fs');
const path = require('path');

const config = require('../config');
const resolvers = require('./resolvers');

// The following extracts a string of types and actions from text files in
// respective directories. They are parsed by graphql on runtime.
const typesFilenames = fs.readdirSync(path.join(__dirname, 'types'), 'utf-8');
const typesFilesString = typesFilenames.reduce((acc, cur) => {
    return acc += fs.readFileSync(path.join(__dirname, 'types', cur));
}, '');
const actionsFilenames = fs.readdirSync(path.join(__dirname, 'actions'), 'utf-8');
const actionsFilesString = actionsFilenames.reduce((acc, cur) => {
    return acc += fs.readFileSync(path.join(__dirname, 'actions', cur));
}, '');
const schema = buildSchema(typesFilesString + actionsFilesString);

module.exports = {
    resolvers,
    schema,
    graphiql: config.env === 'development',
};
