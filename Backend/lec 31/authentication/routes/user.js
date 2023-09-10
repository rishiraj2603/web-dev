const express = require('express');
const user = require('../model/user');
const router = express.Router();

router.get('/',(req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('/login')
    }
    return next();
},(req,res)=>{
    res.send('hello')
})

router.get('/register', (req,res)=>{
    res.render('pages/register.ejs')
})

router.post('/register', async (req,res)=>{
    const {username,password,email} = req.body;
    const name = await user.find({username});
    console.log(name)
    if(!name){
        await user.create({username,password,email});
      return  res.redirect('pages/login'); 
    }
    return res.redirect('back')
})

router.get('/login',(req,res)=>{
    res.render('pages/login')
});

router.post('/login', async(req,res)=>{
    const {username,password} = req.body;
    const name = user.find(username);
    if(name){

    }
});



module.exports = router ;