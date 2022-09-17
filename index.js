const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

//database connection with mongoose
mongoose
    .connect('mongodb+srv://demo2:demo2mongoose@cluster0.rhfsl0e.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    .then(()=> console.log('connection successful'))
    .catch(err=>console.log(err))







app.get('/',function(req,res,next,err){
    if(err){
        console.log('connection failed');
    }else{
        res.end('Hello World');
        console.log('connection success');
    }
});

app.listen(3300,function(){
    console.log("Server Run Successfully...")
})