const mongoose = require("mongoose")
const review = require("../model/reviews.model")

const reviewController = {
    test: (req, res) => {
        res.status(200).json({message: "Test routes are working"})
    },

    create: async(req, res) => {
        // res.status(200).json({message: "We value your feedback. Your testimonial has been recorded successfully"})
        const {name, message, star} = req.body

        try {
            if(!name || !message || !star){
                return res.status(422).json({message: "All fields are required"})
            }

            await review.create({name , message, star})
            return res.status(200).json({message: "We value your feedback. Your testimonial has been recorded successfully"})
        } catch (error) {
            return res.status(500).json({message: "Internal server error", error: error.message})
        }
    }
}

module.exports = reviewController