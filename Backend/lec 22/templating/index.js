const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send('parbhu gandu');
})

app.listen(4000,()=>{
    console.log('parbhu bsdika',4000)
})
