const express = require("express")
const reviewController = require("../controller/reviews.controller")
const reviewRouter = express.Router()

reviewRouter.get("/test", reviewController.test)
reviewRouter.post("/", reviewController.create)

module.exports = reviewRouter