const express = require("express");
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');


router.post('/user/:productId/cart/add',async (req,res)=>{
    try {
        const { productId }= req.params;
        const product = await Product.findById(productId);
        // console.log(req.user._id);

        const userId = req.user._id;
        const user = await User.findById(userId);

        let ind = -1;
        const item = user.cart.find((item, index)=>{
            if(item.productId.equals(product._id)){
                ind = index;
                return item;
            }
        });
        if(item){
            user.cart[ind].quantity++;
        }else{
            user.cart.push({productId:product._id});
        }
    
        await user.save();
    
        req.flash('success', 'Item added to cart');
        res.redirect('back');
        // console.log(userId);
    } catch (error) {
        console.log(error)
    }

});

router.post('/user/:productId/remove',async (req ,res)=>{
    try {
        const { productId }= req.params;
        const product = await Product.findById(productId);
        // console.log(req.user._id);

        const userId = req.user._id;
        const user = await User.findById(userId);
        let ind = -1;
        const item = user.cart.find((item, index)=>{
            if(item.productId.equals(product._id)){
                ind = index;
                return item;
            }
        });
        if(item){
            user.cart[ind].quantity--;
        }else{
            user.cart.push({productId:product._id});
        }
    
        await user.save();
    
        req.flash('success', 'Item added to cart');
        res.redirect('back');
        // console.log(userId);
    } catch (error) {
        console.log(error)
    }
})

router.get('/user/cart',async (req,res)=>{
try {
        const userId = req.user._id;
        const items = await User.findById(userId).populate("cart.productId");
        let totalAmount = 0 ;
        items.cart.forEach(item => {
           totalAmount += item.quantity * item.productId.price ;
        });
        // const totalAmount = await items.quantity
        res.render('products/cart',{cart:items.cart,totalAmount});
} catch (error) {
    console.log(error)
}
});


module.exports = router;
