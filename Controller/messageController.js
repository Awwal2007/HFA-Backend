const messageModel = require("../Model/message");

const sendMessage = async(req, res) => {    
    try {
        if(!req.body || Object.keys(req.body).length === 0){
            return res.status(500).json({
                status: 'error',
                message: 'no data found'
            })
        }

        const message = await messageModel.create(req.body)

        if(!message){
            return res.status(530).json({
                status: 'error',
                message: 'failed to send message'
            })
        }

        res.status(200).json({
            status: 'success',
            message: 'message sent successfully',
            data: message
        })
    } catch (error) {
        console.log(error);        
    }
}

const getMessage = async (req, res) => {
    try {
        const message = await messageModel.find()
        if(!message){
            return res.status(404).json({
                status: 'error',
                message: "No message found"
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Message fetched successfully',
            data: message
        })
    } catch (error) {
        console.log(error);        
    }
}

module.exports = {sendMessage, getMessage}

