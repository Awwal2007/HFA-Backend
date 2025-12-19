const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require("morgan");
require('./Config/connectToDb')
const dotenv = require('dotenv');
const messageRouter = require('./Router/messageRouter');
const authRouter = require('./Router/authRouter');
dotenv.config()


app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/v1/message', messageRouter)
app.use('/api/v1/auth', authRouter)


app.get("/", (req, res)=>{res.send("Welcome to HFA Api version 1.0")})

app.all("/{*any}", (req, res) => {
    res.json(`${req.method} ${req.originalUrl} is not an endpoint on this server.`)
})
app.listen(400, ()=>{
    console.log('listening to port: 400');    
})