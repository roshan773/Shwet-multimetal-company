const mongoose = require("mongoose")
require("dotenv").config()

const connecttoDb = async() => {
    try {
        await mongoose.connect(process.env.mongo_url + "Shwet-multimetal-company")
        console.log("Connected to Database")
    } catch (error) {
        console.log("Unable to connect", error)
    }
}

module.exports = connecttoDb