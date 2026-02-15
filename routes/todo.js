const express = require("express");

const router = express.Router();

// import controller 

const createTodo = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const {gettodo} =  require("../controllers/getTodo");
const updatetodo = require("../controllers/updatetodo");
const deleteTodo = require("../controllers/deleteTodo");

// define Api Route 


router.post('/createtodo', createTodo);
router.get('/getodo', getTodo);
router.get('/gettodo/:id', gettodo);
router.put("/updatetodo/:id",updatetodo);
router.delete("/deletetodo/:id",deleteTodo);



module.exports = router;

