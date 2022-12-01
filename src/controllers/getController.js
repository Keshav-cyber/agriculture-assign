const orgModel = require("../models/organisationModel")

const fieldModel = require("../models/fieldModel")
const  cropModel = require("../models/cropModel")
const regionModel = require("../models/regionModel")


const getAllOrganization = async function(req,res){
    try{

       let orgs = await orgModel.find()
       res.status(200).send({data:orgs})


    }catch(error){
        res.status(500).send({msg:error.message})
    }
}

const getFieldById = async function(req,res){
    try{
       let OrgId = req.params.id
       let field = await fieldModel.findById(OrgId)

       if(!field) return res.status(404).send({msg: "no field with this id"})
       res.status(200).send({data:field})


    }catch(error){
        res.status(500).send({msg:error.message})
    }
}


const getAllCrop = async function(req,res){
    try{
        let fieldId = req.params.id
        let crops = await cropModel.findById(fieldId)

       if(!crops) return res.status(404).send({msg: "no crop with this id"})
       res.status(200).send({data:crops})


    }catch(error){
        res.status(500).send({msg:error.message})
    }
}
module.exports ={ getAllOrganization,getFieldById ,getAllCrop}