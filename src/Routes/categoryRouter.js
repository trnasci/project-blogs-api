const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryController');
const { validateJWT } = require('../midlewares/validateJWT');

router.post('/', validateJWT, categoryController.createCategory);
router.get('/', validateJWT, categoryController.getAllCategories);

module.exports = router;