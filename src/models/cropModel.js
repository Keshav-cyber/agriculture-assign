const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId
const cropSchema = new mongoose.Schema({
    
    cropName: {
        type: String,
        required: true,
    },
    quantityPerAcer:{
        type:number,
        required:true
    },
    cropCycleId: {
        type: objectId,
        required: true,
        ref:"cropCycle"
    },
    duration :{
        type : Number,
        required : true
    }

},
    { timestamps: true });

module.exports = mongoose.model('crop', cropSchema)