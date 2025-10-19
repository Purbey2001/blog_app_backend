const Post = require("../models/post")
const Like = require("../models/like");

exports.likePost = async (req,res) => {
    try {
        //fetch data from req body
        const {post,user} = req.body;
        const savedLikes = await Like.create({post,user});
        //find the post by id, add the new comment to comments array
        const updatedPost = await  Post.findByIdAndUpdate(post,{$push:{likes:savedLikes._id}},{new:true})
        .populate("likes") //populate the comments array with comment document
        .exec();
        res.status(200).json({
            success:true,
            data:[savedLikes,updatedPost],
            message:"Liked Successfully."
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:'Error while liking post.',
            message:error.message
        })
    }
}

exports.unlikePost = async (req,res) => {
    try {
        //fetch data from req body
        const {post,like} = req.body;
        //find the post by id, add the new comment to comments array
        Like.findByIdAndDelete(like);
        const updatedPost = await  Post.findByIdAndUpdate(post,{$pull:{likes:like}},{new:true})
        .populate("likes") //populate the comments array with comment document
        .exec();
        res.status(200).json({
            success:true,
            data:updatedPost,
            message:"Unliked Successfully."
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:'Error while unliking post.',
            message:error.message
        })
    }
}