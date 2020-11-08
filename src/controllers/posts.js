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
            res.status(200).json({newPost:newPost});
        } catch (error) {
            res.status(500).json({failed:"failed to create post!"});
            console.log(error);
        }
    });
}

//get all posts
module.exports.get_posts = async (req, res) => {
    const posts = await Post.find();
    res.json({ posts: posts });
  };

  //delete a post
  module.exports.delete_post = async (req, res) => {
    try {
      await Post.deleteOne({
        _id: req.params.id,
      });
      res.status(204).send();
    } catch {
      res.status(404);
      res.json({
        error: "Post doesn't exist!",
      });
    }
  };