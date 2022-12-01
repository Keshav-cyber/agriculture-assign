const mongoose = require("mongoose")
const objectId = mongoose.Schema.Types.ObjectId


const regionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    propertyId :{
        type:objectId,
        ref : 'property'
    },
    orgId :{
        type : objectId,
        ref : 'organisation'
    }

},
    { timestamps: true });

module.exports = mongoose.model('region', regionSchema)