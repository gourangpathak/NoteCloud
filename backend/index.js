// Add required Modules
const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

// start the APP
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Gourang!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})