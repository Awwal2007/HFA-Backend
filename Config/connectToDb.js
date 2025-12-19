const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()

const mongoUri = process.env.mongo_uri

const connectToDb = () =>{
    try {
        const connected = mongoose.connect(mongoUri)
        if(connected){
            console.log("MONGO DB CONNECTED");            
        }
    } catch (error) {
        console.log(error);        
    }
}
connectToDb()

module.exports = connectToDb;