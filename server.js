const express = require('express');
const app = express();
const todoroutes = require("./routes/todo");
// load config 
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// Middleware to parse json 

app.use(express.json());


//  import routes for todo api 

// mounting todo routes

app.use("/api/v1", todoroutes);


// start server 

app.listen(PORT, () => {
    console.log(`Server Started successfully at ${PORT}`)
});

//  connect to the Database 

const {dbConnect} = require("./config/database");
dbConnect();

// default Route
app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"On Default Route"
    })
})