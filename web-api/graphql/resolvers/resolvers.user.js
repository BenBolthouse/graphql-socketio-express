const { User } = require('../../db/models');

module.exports.getUserById = async ({ id }) => {
    return await User.findByPk(id);
};

module.exports.createUser = async ({ input }) => {
    return await User.create(input);
};
