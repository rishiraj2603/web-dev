const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require("path")
const session = require('express-session');
mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(() => {
    console.log('mongoDB running')
})
.catch((err) => {
    console.log(err);
})

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const userRoutes = require('./routes/user')
app.use(userRoutes);
const PORT = 4000;

app.listen(PORT, () => {
    console.log('running', PORT)
})

