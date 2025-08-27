const express = require("express")
const connecttodb = require("./utils/db")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000












app.listen(PORT, () => {
    try {
        console.log("Server is running");
        connecttodb()
    } catch (error) {
        console.log("Internal server error", error)
    }
})