const mongoose = require("mongoose")
require("dotenv").config()

const connecttodb = async() => {
    try {
        await mongoose.connect(process.env.Mongo_url + "shwet-multimertal-Db")
        console.log("Connected to Database")
    } catch (error) {
        console.log("Internal server Error", error)
    }
}

module.exports = connecttodb