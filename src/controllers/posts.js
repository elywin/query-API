const Post = require('../schemas/postmodel'); //imported post model 

//create a post
module.exports.create_post = async (req, res) => {
   
    let newPost = new Post({
      title: req.body.subject,
      content: req.body.question,

    });

    await newPost.save(()=>{
        try {
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json({failed:"failed to create post!"});
            console.log(error);
        }
    });
}