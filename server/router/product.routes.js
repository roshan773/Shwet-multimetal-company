const express = require("express")
const productController = require("../controller/product.controller")
const productRouter = express.Router()

productRouter.get("/", productController.test)


module.exports = productRouter