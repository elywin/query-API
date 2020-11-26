const express = require('express');
const router = express.Router();
const Posts = require('../controllers/posts');

//route to create post
router.post('/questions',Posts.create_post);

//route to get all posts
router.get('/questions',Posts.get_posts);

//route to get specific post
router.get('/questions/:id',Posts.get_post);

//route to delete a post
router.post('/questions/:id',Posts.delete_post);

module.exports = router;