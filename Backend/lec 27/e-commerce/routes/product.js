const express = require("express");
const Product = require("../models/porduct");
const router = express.Router();

router.get('/products',async (req,res)=>{
const product = await Product.find({})
res.render('products/index.ejs',{product})
// res.send("this is product");

})

router.get('/product/new',(req,res)=>{
res.render('products/new.ejs')
})

router.post('/products', async (req, res)=>{
    const {name, image, price, description} = req.body;
    await Product.create({name, image, price, description});
    res.redirect('/products');
})

router.get('/products/:id',async (req,res)=>{
    const {id} =req.params;
    const product = await Product.findById(id);
    // const productData = await Product.find().select({"_id":1})
    // res.send(productData)
    res.render('products/id:',{product});
})

router.get('/products/:id/edit',(req,res)=>{
    const {id} = req.params
    const product = Product.findById(id);

    res.render('products/edit',{product})


})




module.exports= router;
