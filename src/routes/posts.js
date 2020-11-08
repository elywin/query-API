const express = require('express');
const router = express.Router();
const createPost = require('../controllers/posts');

//route to create post
router.post('/questions',createPost.create_post);

module.exports = router;