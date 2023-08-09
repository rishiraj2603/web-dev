const express = require("express");
const Product = require("../models/porduct");
const { validateData } = require("../middleware");
const router = express.Router();


router.get('/products',async (req,res)=>{
const products = await Product.find({});
res.render('products/index.ejs',{products})
})

router.get('/product/new',(req,res)=>{
res.render('products/new.ejs')
})

router.post('/products',validateData, async (req, res)=>{
    const {name, image, price, description} = req.body;
    await Product.create({name, image, price, description});
    res.redirect('/products');
})

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('reviews');
    res.render('products/show', { product });
});

router.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product });
});

router.patch('/products/:id', async (req, res)=>{
    const {id} = req.params;
    const {name, image, price, description} = req.body;

    await Product.findByIdAndUpdate(id, {name, image, price, description});
    res.redirect(`/products/${id}`);
});

router.delete('/products/:id', async (req, res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    await Product.findByIdAndDelete(id).populate('reviews');
    res.redirect('/products');
});


module.exports= router;
