const Todo = require("../models/Todo");



const deleteTodo = async (req, res)=>{

    try{
            const id  = req.params.id;

            await Todo.findByIdAndDelete({_id:id});

            res.status(200).json({
                success:true,
                message:"Successfully Deleted The Todo",
            })

    }

    catch(err)
    {
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = deleteTodo;