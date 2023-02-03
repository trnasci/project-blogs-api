const express = require('express');

const router = express.Router();

const postController = require('../controllers/postController');
const { validateJWT } = require('../midlewares/validateJWT');

router.get('/', validateJWT, postController.getPosts);

module.exports = router;