const Post = require("../models/post")

exports.getPost = async (req,res) => {
    try {
        //fetch data from req body
        const posts= await Post.find().populate("likes").populate("comments").exec();
        //create a comment object
        //const post = new Post({title,body});
        //save the new comment in database 
        //const savedPost = await post.save();
        res.status(200).json({
            success:true,
            data:posts,
            message:"Post fetched successfully"
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:'Error while fetching posts.',
            message:error.message
        })
    }
}

exports.createPost = async (req,res) => {
    try {
        //fetch data from req body
        const {title,body} = req.body;
        //create a comment object
        const post = new Post({title,body});
        //save the new comment in database 
        const savedPost = await post.save();
        res.status(200).json({
            success:true,
            data:savedPost,
            message:"Post Created Successfully."
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success:false,
            data:'Error while creating post.',
            message:error.message
        })
    }
}