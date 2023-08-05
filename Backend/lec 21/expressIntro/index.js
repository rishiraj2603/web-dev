//------- templets
// pug.com
// handlebar.com
// ejs.com



const express  = require('express');
const app = express();



app.get('/',(req,res)=>{
    res.send('home page')
})


app.get('/login',(req,res)=>{
    res.send('login page')
})

app.get('/getdata')

app.get('*',(req,res)=>{
    res.send('404 error')
})



app.listen(4000,()=>{
    console.log("server is at post",4000)
})