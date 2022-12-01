const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId

const fieldSchema = new mongoose.Schema({
     area :{
        type:Number,
        required:true
     },
     cordinates:{
      type:Number
     },
     orgId:{
      type : objectId,
      ref : 'organisation'
     },
     regionId:{
        type :objectId,
        ref : 'region'
     }
},
    { timestamps: true });

module.exports = mongoose.model('field', fieldSchema)