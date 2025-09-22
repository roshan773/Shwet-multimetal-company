const express = require("express")

const productController = {
    test: (req, res) => {
        res.status(200).json({message: "Test route is working"})
    }
}

module.exports = productController