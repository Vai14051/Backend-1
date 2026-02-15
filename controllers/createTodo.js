const  Todo = require("../models/Todo");

// Define Route handler 


const createTodo = async (req,res) =>{

    try{
        const {title, description} = req.body;

        const response  = await Todo.create({title,description});

        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })

        
    }
    catch(error)
    {
        console.error("Error Ocuured", error)
        res.status(500),json({
            success:false,
            data:"Internal Server Error",
            message:err.message
        })
    }


}

module.exports = createTodo