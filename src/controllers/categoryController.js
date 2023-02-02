const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    try {
      const { name } = req.body;
      const newCategory = await categoryService.createCategory(name);
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  };

const getAllCategories = async (_req, res) => {
    const categories = await categoryService.getAllCategories();
    return res.status(200).json(categories);
};

const getByUserId = async (req, res) => {
    const { id } = req.params;
    const user = await categoryService.getByUserId(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

  module.exports = { 
    createCategory,
    getAllCategories,
    getByUserId,
 };