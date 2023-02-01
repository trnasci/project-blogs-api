const Joi = require('joi');
require('dotenv/config');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const createValidation = Joi.object({
  displayName: Joi.string().min(8).max(45).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(45).required(),
  image: Joi.string().min(6),
});

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
  const user = await getByEmail(email);
  const { error } = createValidation.validate({ displayName, email, password, image });
  if (user) {
    const err = { status: 409, message: 'User already registered' };
    throw err;
  }
  if (error) {
    const err = { status: 400, message: error.message };
    throw err;    
  }     
  await User.create({ displayName, email, password, image });
  const newUser = await getByEmail(email);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: newUser.id } }, secret, jwtConfig);

  return token;
};

const getUsers = () => User.findAll();

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByEmail,
  getByUserId,
};