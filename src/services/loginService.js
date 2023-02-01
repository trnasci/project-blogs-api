const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getUsers = () => User.findAll();

const getByEmail = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByEmail,
  getByUserId,
};