const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const postRoutes = require('./src/routes/posts');

//databse connection
mongoose.connect(process.env.dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
const db = mongoose.connection;

//verify database connection
db.once("open", (_) => {
    console.log("databse connected:", process.env.dbURI);
  });
  
  db.on("error", (err) => {
    console.error("connection failed:", err);
  });


app.get('/',(req,res)=>{
    res.send('hello world!!');
}).listen(port,_=>{
    console.log(`server running on http://localhost:${port}`);
});
