const express = require('express')
const router = express.Router()

const {registerUser,loginUser} = require("../controllers/userController")
const { authenticate} = require("../middleware/middleware")
const {getAllOrganization,getFieldById,getAllCrop} = require("../controllers/getController")

router.post("/register", registerUser)    
router.post("/login",loginUser)   


router.get("/organization",authenticate,getAllOrganization)
router.get("/fields/:id",authenticate,getFieldById)
router.get("/field/:id",authenticate,getAllCrop)
router.get("/")


module.exports = router