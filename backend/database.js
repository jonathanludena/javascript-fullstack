const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
}).then(db => console.log('DB is connected'))
  .catch(err => {
    console.log(process.env.NODE_ENV)
    console.error(err)
  })