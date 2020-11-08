const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const postRoutes = require('./src/routes/posts');
//const bodyParser = require("body-parser");
require('dotenv').config()
//databse connection
mongoose.connect(process.env.dbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});
const db = mongoose.connection;

//verify database connection
db.once("open", (_) => {
    console.log("databse connected:", process.env.dbURL);
  });
  
  db.on("error", (err) => {
    console.error("connection failed:", err);
  });

//returns middleware that only parses json
//app.use(bodyParser.json());
app.use(express.json()); 

//middleware
  app.use('/', postRoutes);

  //server port
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send("Welcome to query API");
  });
