const express = require('express')
const router =express.Router()
const { createUser, checkLogin } = require('../controllers/user_controllers')


//createuser   --
        //method-post
router.post("/createuser",createUser)

//login user
router.post("/login",checkLogin
)

module.exports=router