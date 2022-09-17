const express = require('express');
const mongoose= require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo",todoSchema);

//GET TODO
router.get('/',function(req,res){

});

//GET TODO  BY ID
router.get('/:id',function(req,res){

});

//POST A TODO 
router.post('/',async(req,res)=>{
    const newTodo = new Todo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server site error!"
            });
        }else{
                res.status(200).json({
                    error: "Todo inserted successfully!"
                });
        }
    });
});

//POST MULTIPLE TODO
router.post('/all',function(req,res){

});

//PUT TODO
router.put('/:id',function(req,res){

});

//DELETE TODO
router.delete('/:id',function(req,res){

});

module.exports = router;