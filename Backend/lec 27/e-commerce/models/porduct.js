const mongoose = require('mongoose');
const Review = require('./review');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    description: {
        type: String,
        trim: true,
        require: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]

});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;


