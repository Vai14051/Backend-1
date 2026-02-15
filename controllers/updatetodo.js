const Todo = require("../models/Todo");


const updatetodo = async (req,res) =>{

    try{

        const id = req.params.id;

        const {title, description} =  req.body;

        const updatedTodo = await Todo.findByIdAndUpdate({_id:id},{
            title, description, updatedAt:Date.now()
        })


        res.status(200).json({
            success:true,
            message:"Successfully Updated the Todo",
            data:updatedTodo,

        })

    }

    catch(error)
    {
        console.error(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = updatetodo;