const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = 4000;

app.use(cookieParser());

app.get('/iphone',(req,res)=>{
   
    res.cookie('price','40000');
    res.send('iphone bought')

})

app.get('/earbuds',(req,res)=>{
    const {price} = req.cookies;
    let discount = 10000;
    let earbudsPrice = 30000;
    if (price >= "50000"){
        earbudsPrice = earbudsPrice - discount;
        res.cookie('price', earbudsPrice);
        res.send(`your earbud price is ${earbudsPrice}`)
    }
    else {
        res.send(`your earbud price is ${earbudsPrice}`)
    }

})


app.listen(PORT,()=>{
    console.log('server')
})




