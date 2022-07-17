// require mongoosw
const mongoose  = require('mongoose')
// initialize mongoURI
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false"

// connect to mongoose
const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

// export the connectToMongo method
module.exports = connectToMongo;