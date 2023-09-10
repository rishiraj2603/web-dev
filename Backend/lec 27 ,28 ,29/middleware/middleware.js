const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('yeah chal raha')
})

const middleware = (req,res,next)=>{
    const {pass} = req.params;
    if(pass !== '123') return res.send('incorrect')
    next()
};

app.get('/secret/:pass',middleware,(req,res)=>{
    res.send('password correct')
})


const port = 3000
app.listen(port,()=>{
    console.log('working')
})