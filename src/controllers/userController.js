const userService = require('../services/userService');

const createUser = async (req, res) => {
    try {
      const { displayName, email, password, image } = req.body;
      const token = await userService.createUser(displayName, email, password, image);
      return res.status(201).json({ token });
    } catch (error) {
      return res.status(error.status).json({ message: error.message });
    }
  };

const getUsers = async (_req, res) => {
    const users = await userService.getUsers();
    return res.status(200).json(users);
};  

  module.exports = { 
    createUser,
    getUsers,
 };