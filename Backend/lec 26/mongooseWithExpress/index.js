const express = require('express');
const mongoose = require("mongoose")
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/Main')




// app.get('/',(res,req)=>{
//     console.log('home')
// })




const PORT = 5000;

app.listen(PORT,()=>{
    console.log('server running')
})