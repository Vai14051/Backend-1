const express = require('express');
const app = express();

// Body parser middleware 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/",(req,res)=>{

    res.json({
        success:true,
        message:"Hello this is new to"
    })

});

app.listen(3000, ()=>{
    console.log("Server Started at port 3000");
});