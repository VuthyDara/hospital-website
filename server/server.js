const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require("path")
const cors = require('cors')

const routes = require('./routes/app_routes')
const app = express()
const port = 4000

try {
  app.use(cors())
  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())
  app.use(routes)
} catch (err) {
  console.log(err)
}

mongoose.connect('mongodb+srv://Dara:A12345678@cluster0.pr9wu.mongodb.net/Hospital?retryWrites=true&w=majority')
.then(result => {
  console.log("Db is connected")
  app.listen(port)
}).catch(err => {
  console.log(err)
})