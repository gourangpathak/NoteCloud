// Add required Modules
const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

// start the APP
const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})