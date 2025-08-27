const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    image: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/16794/16794610.png"
    },

    name: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    star: {
        type: Number,
        min: 1,
        max: 5,
        default: 0
    },

    createdAt: {
        type: String,
        default: () => {
            const today = new Date();
            return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
        }
    }
})

const review = mongoose.model("review", reviewSchema)
module.exports = review