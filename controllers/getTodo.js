const Todo = require("../models/Todo");

const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "Successfully Accessed the List of Todos"
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error"
        });
    }
};


const gettodo = async (req, res) =>{
    try{

        const id = req.params.id;
        console.log("ID", id);

        const todo = await Todo.findById({_id:id});

        res.status(200).json({
            success:true,
            data:todo,
            message:"Successfully Fetched Todo"
        })

    }

   catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Server Error"
        });
    };
};





module.exports =  {getTodo, gettodo};
