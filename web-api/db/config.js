const config = require('../config');

module.exports = {
  development: { ...config.db, dialect: 'postgres' },
};
