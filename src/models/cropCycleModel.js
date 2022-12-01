const mongoose = require("mongoose")

const cropCycleSchema = new mongoose.Schema({
   
     cropCycleName :{
        type : String,
        required:true
     }
     
},{timestamps:true})

module.exports = mongoose.model('cropCycle',cropCycleSchema)
