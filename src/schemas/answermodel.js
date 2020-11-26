const mongoose = require('mongoose'); //import mongoose package

//instance of a schema
const answerSchema = mongoose.Schema;


//defining the schema
let answer = new answerSchema({
    answer:String
});

// create a model
const model = mongoose.model("Answer",answer);

//export the model
module.exports = model;