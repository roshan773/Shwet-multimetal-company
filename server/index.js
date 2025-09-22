const express = require("express")
const connecttoDb = require("./DB/db")
const productRouter = require("./router/product.routes")
require("dotenv").config()
const app = express()





app.use("/api/product/", productRouter)






app.listen(process.env.PORT, async() => {
    try {
        console.log("Server is running")
        await connecttoDb()
    } catch (error) {
        console.log("Internal Error", error)
    }
})