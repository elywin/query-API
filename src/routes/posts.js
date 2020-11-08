const express = require('express');
const router = express.Router();
const Posts = require('../controllers/posts');

//route to create post
router.post('/questions',Posts.create_post);

//route to get all posts
router.get('/questions',Posts.get_posts);

module.exports = router;