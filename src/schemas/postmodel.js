//import mongoose package
const mongoose = require('mongoose');

//instance of a schema
const postSchema = mongoose.Schema;

//defining a schema
let posts = new postSchema({
    subject:String,
    question:String
});

// create a model
// post - name of the collection that contain the document

const model = mongoose.model("post",postSchema);

//export the model
module.exports = model;