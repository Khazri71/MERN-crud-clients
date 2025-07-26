const mongoose = require('mongoose')



const ClientSchema = new mongoose.Schema({
    nom : String,
    email :String , 
    age : Number
})


const ClientModel = mongoose.model("train-client-dbs" , ClientSchema)



module.exports = ClientModel