const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDb')
 .then(()=>{
    console.log('my DB connected');
 })
.catch((err)=>{console.log(err)});

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})

const User = mongoose.model('User' , userSchema);

// const newuser = new User({
//     name:'hdsaui',
//     age:32,
//     email:"adsa@gmail.com",
//     contact:3284922093
// });

// newuser.save()
// .then((data)=>{
//     console.log(data)
// });

User.create({ 
    name:'rishi',
    age:22,
    email:"abca@gmail.com",
    contact:32832423
})
.then(()=>{console.log('saved')})