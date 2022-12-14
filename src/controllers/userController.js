const authorModel = require("../models/userModel");
const jwt = require('jsonwebtoken')
const { isValidEmail, isValidPassword, isValid } = require("../middleware/validation.js")



//====================================================Create Author Api====================================================================



const registerUser = async function (req, res) {
    try {
        let {fullName,email,password} = req.body;
        
        if (Object.keys(req.body).length<1) return res.status(400).send({ msg: "Insert Data : BAD REQUEST" })

        if (!isValid(fullName)) {
            return res.status(400).send({ msg: "Enter First Name" })
        }
         
        if (!isValidEmail(email)) {
            return res.status(400).send({ msg: "enter valid email" })
        }
        let checkEmail=await userModel.findOne({email:email})
        if(checkEmail) return res.status(400).send({msg :"Email Already Registered"})
        
        if (!isValid(password)) {
            return res.status(400).send({ msg: "Create Password" })
        }
        if (!isValidPassword(password)) {
            return res.status(400).send({ msg: "Minimum eight characters, at least one letter and one number" })
        }
        let savedData = await userModel.create(req.body);
        return res.status(201).send({ status:true, data: savedData });
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }

};


//====================================================Author Login Api=======================================================================


const loginUser = async function (req, res) {

    try {
        if (Object.keys(req.body).length<1) return res.status(400).send({ msg: "Insert Data : BAD REQUEST" })
        
        let email = req.body.email;
        if(!email) return res.status(400).send({status:false,msg:"enter email"})

        let password = req.body.password;
        if(!password) return res.status(400).send({status:false,msg:"enter password"})

        let user = await userModel.findOne({ $and:[{email: email}, {password: password }]});
        if (!user)
            return res.status(401).send({
                status: false,
                msg: "email or the password is not correct",
            });
        let token = jwt.sign(
            {
                userId: user._id.toString(),
            },
            "agriculture-app"
        );
        return res.status(200).send({ status: true, data: {token: token} });
    }
    catch (error) {
        res.status(500).send({ msg: error.message })
    }


}



module.exports = { registerUser,loginUser }
