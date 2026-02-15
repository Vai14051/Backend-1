const express = require("express");

const router = express.Router();

// import controller 

const createTodo = require("../controllers/createTodo");

// define Api Route 


router.post('/createtodo', createTodo);


module.exports = router;

