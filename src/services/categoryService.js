require('dotenv/config');
const { Category } = require('../models');

const getByName = (name) => Category.findOne({ where: { name } });

const createCategory = async (name) => {
  if (!name) {
    const err = { status: 400, message: '"name" is required' };
    throw err;    
  }     
  await Category.create(name);
  const newCategory = await getByName(name);

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getByUserId = async (userId) => {
  const user = await Category.findByPk(userId, {
    attributes: {
      exclude: ['password'],
    },
  });

  return user;
};

module.exports = {
  createCategory,
  getAllCategories,
  getByName,
  getByUserId,
};