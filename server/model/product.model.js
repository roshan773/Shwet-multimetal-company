const mongoose = require("mongoose")

const productModel = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    review: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    price: {
        type: Number,
        required: true
    }
},
    {
        timestamp: true
    }
)

const Product = mongoose.model("Product", productModel)
module.exports = Product