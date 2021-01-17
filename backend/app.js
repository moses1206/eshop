const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose")
const colors = require("colors")

// MiddleWare
app.use(bodyParser.json())
app.use(morgan("tiny"))

require("dotenv/config")

const api = process.env.API_URL

// http://localhost:3000/api/v1/products

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    image: "some_url",
  }
  res.send(product)
})

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body
  console.log(newProduct)
  res.send(newProduct)
})

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "samyangfoods",
  })
  .then(() => {
    console.log("Database Connention is Ready...!!".white.bold)
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000".cyan.bold)
})
