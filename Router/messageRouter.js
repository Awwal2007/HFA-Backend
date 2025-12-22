const express = require('express')

const messageRouter = express.Router()

const {sendMessage, getMessage, changeMessageStatus} = require('../Controller/messageController')

messageRouter.post('/', sendMessage)
messageRouter.get('/', getMessage)
messageRouter.put('/:id', changeMessageStatus)

module.exports = messageRouter

