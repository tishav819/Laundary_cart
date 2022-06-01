const express = require('express')
const { createOrderdetail, getOrderList } = require('../controllers/order_controllers')
const fetchuser = require('../middlewares/userfetch')
const router =express.Router()
// const { createUser, checkLogin } = require('../controllers/userContollers')


//createOrder   --
        //method-post
router.post("/createorder",fetchuser,createOrderdetail)

//get orderlist
router.get("/orderlist",fetchuser,getOrderList)


module.exports=router