const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const { validateJWT } = require('../midlewares/validateJWT');

router.post('/', userController.createUser);
router.get('/', validateJWT, userController.getUsers);
router.get('/:id', validateJWT, userController.getByUserId);

module.exports = router;