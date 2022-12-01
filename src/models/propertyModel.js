const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId


const propertySchema = new mongoose.Schema({
    organisationId :{
        type:objectId,
        ref : 'organisation'
    }
   
},
    { timestamps: true });

module.exports = mongoose.model('property', propertySchema)