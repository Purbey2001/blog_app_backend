const express = require('express');
const router = express.Router();


const {createComment} = require('../controllers/comment');
const {likePost,unlikePost} = require('../controllers/like');
const {createPost,getPost} = require('../controllers/post');


router.get("/posts",getPost);
router.post("/posts/create",createPost);
router.post("/comments/create",createComment);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);


module.exports=router;