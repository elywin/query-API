//import mongoose package
const mongoose = require('mongoose');

//instance of a schema
const postSchema = mongoose.Schema;

//defining a schema
let posts = new postSchema({
    subject:String,
    question:String,

    //answer to a question
  answer: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
      },
    },
  ]
});

// create a model
// post - name of the collection that contain the document

const model = mongoose.model("post",posts);

//export the model
module.exports = model;