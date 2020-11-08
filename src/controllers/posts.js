const Post = require('../schemas/postmodel'); //imported post model 

//create a post
module.exports.create_post = async (req, res) => {
   
    let newPost = new Post({
      subject: req.body.subject,
      question: req.body.question,

    });

//save post to database
    await newPost.save(()=>{
        try {
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json({failed:"failed to create post!"});
            console.log(error);
        }
    });
}