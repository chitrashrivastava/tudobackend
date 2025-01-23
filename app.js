const bodyParser = require("body-parser")
const express = require("express")
require('./models/config')
const app = express()
app.listen(3000,  ()=>{
console.log("server is run on 3000")
})

module.exports = app

// cors, express, mongoose ,nodemon, body-parser