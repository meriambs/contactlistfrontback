const express = require('express')

const ContactRouter = require("./routes/contact")
//jibna si el cors 
var cors = require('cors')
const app = express()

const port = process.env.port

const connectddb = require('./config/connectdb')

require('dotenv').config()

connectddb()
//nedineh 
app.use(cors())
app.use(express.json())

app.use('/api/user',ContactRouter)



app.listen(process.env.port,err=>{
    err?console.log(err):console.log(`you did it ${process.env.port}`)
})
   