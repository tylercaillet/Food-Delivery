const mongoose = require('mongoose')

let MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/covidDatabase'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
