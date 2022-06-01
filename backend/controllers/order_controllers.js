const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Orders = require('../models/Orderdetail')

const JWT_SECRET="laundry-service"


//create user

const createOrderdetail =async(req,res)=>{
    // check user already there or not
    try{
        
        const {orderItems,totalItems,totalPrice}=req.body
       // create order details, after succesfully login
        console.log(req.user  , "idddd") 
        const neworder=await Orders.create(
            {orderItems,
               totalPrice,
               totalItems,
            user:req.user.id
        })
        res.send({sucsess:"created"})
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:"internal server error while creating order details"})
    }
}

// getting data, it will gave the order detail, help in summary n all
const getOrderList =async(req,res)=>{
    try{
    const orderlist =await Orders.find({user:req.user.id})
    res.json(orderlist)
    }catch(error){
        res.status(500).json({error:"internal server error while searching order detail"})
    }

}


module.exports={createOrderdetail,getOrderList}