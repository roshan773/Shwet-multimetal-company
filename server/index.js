const express = require("express")
const connecttodb = require("./utils/db")
const reviewRouter = require("./router/reviews.routes")
const cors = require("cors")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


app.use("/api/review/", reviewRouter)







app.listen(PORT, () => {
    try {
        console.log("Server is running");
        connecttodb()
    } catch (error) {
        console.log("Internal server error", error)
    }
})