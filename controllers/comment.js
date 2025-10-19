const Post = require("../models/post")
const Comment = require("../models/comment")

exports.createComment = async (req,res) => {
    try {
        //fetch data from req body
        const {post,user,body} = req.body;
        //create a comment object
        const comment = new Comment({post,user,body});
        //save the new comment in database 
        const savedComments = await comment.save();
        //find the post by id, add the new comment to comments array
        const updatedPost = await  Post.findByIdAndUpdate(post,{$push:{comments:savedComments._id}},{new:true})
        .populate("comments") //populate the comments array with comment document
        .exec();
        res.status(200).json({
            success:true,
            data:[savedComments,updatedPost],
            message:"Commented Successfully."
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:'Error while commenting on post.',
            message:error.message
        })
    }
}