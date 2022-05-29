const express = require('express')
const app =express()


const mongoose = require('mongoose')
//connecting to DB

// 
mongoose.connect('mongodb+srv://abc123:Tishaverma@cluster0.dhuyb.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log(err))
// mongoose.connect('mongodb+srv://user1:user1@cluster0.fvdtm.mongodb.net/landrydata?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


//external middleware
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())




const PORT= 5000

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port 5000");
})
