const express = require('express')

const messageRouter = express.Router()

const {sendMessage, getMessage} = require('../Controller/messageController')

messageRouter.post('/', sendMessage)
messageRouter.get('/', getMessage)

module.exports = messageRouter

