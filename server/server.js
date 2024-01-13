const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./Routes/index')

//
const app = express()

//middleWares
app.use(cors())
app.use(bodyParser.json())
///
//api routes
app.get("/", router)


app.listen(3002, ()=>{
    console.log('server is running on port 3002')
})