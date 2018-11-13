var mongoose = require('mongoose')
var connectionString = 'mongodb://<dbuser>:<dbpassword>@ds155313.mlab.com:55313/briantaskmanager' 
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('Connected to Database')
})