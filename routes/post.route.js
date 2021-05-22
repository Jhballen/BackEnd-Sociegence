var express = require('express');
var router = express.Router();
const postController = require ("../controllers/post.controller");

router.get('/', postController.findAllPosts);

router.post('/', postController.createPost);

router.get('/:id', postController.findOnePost);

router.delete('/:id', postController.deletePost);

router.put('/:id', postController.updatePost);

module.exports = router;