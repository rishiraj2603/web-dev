const express = require("express");

const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require('ejs-mate')
const { url } = require("inspector");

app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

mongoose.connect('mongodb://127.0.0.1:27017/E-Com-DB')
.then(()=>{
  console.log('mongoDB running')
})
.catch((err)=>{
  console.log(err);
})
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const porductsroutes = require("./routes/product");
app.use(porductsroutes);

app.get('/',(req,res)=>{
   res.send("server running")
}) 

const PORT = 4000;
 app.listen(PORT,()=>{
   console.log("server is running")
 })



