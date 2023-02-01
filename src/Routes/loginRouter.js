const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

router.post('/', loginController.validLogin);

module.exports = router;