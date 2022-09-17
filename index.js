const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');

const app = express();

app.use(express.json());

//database connection with mongoose
mongoose
    .connect('mongodb+srv://demo2:demo2mongoose@cluster0.rhfsl0e.mongodb.net/demo2?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    })
    .then(()=> console.log('connection successful'))
    .catch(err=>console.log(err))


app.use('/todo', todoHandler);




app.get('/', (req, res, next,err) => {
    fs.readFile('/file-does-not-exist', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })
  

app.listen(3200,function(){
    console.log("Server Run Successfully...")
})