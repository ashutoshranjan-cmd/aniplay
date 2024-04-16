require('dotenv').config()
const express = require("express")
const cors = require('cors')
const router = require('./routes/signup')
const router2 = require('./routes/login')
const router3 = require('./routes/update')
const mongoose = require('mongoose')
//express app
const app = express()

app.use(cors())
app.use(express.json())

//routes
app.use('/api/signup',router)
app.use('/api/login',router2)
app.use('/api/update',router3)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("The database is connected and listening at port",process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
})
