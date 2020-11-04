const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send('hello world!!');
}).listen(port,_=>{
    console.log(`server running on http://localhost:${port}`);
});