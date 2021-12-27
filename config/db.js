const mongoose = require('mongoose')


//Connecting DB for future, if more funcationality have to add

module.exports = () => {
  mongoose
  .connect(process.env.LOCAL_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('Database is connected successfully');
  }).catch(err => {
    console.log('Error in connecting DB', err)
  })
}

  