const { User } = require('../../db/models');

module.exports.getUserById = async ({ id }) => {
    return await User.findByPk(id);
};
