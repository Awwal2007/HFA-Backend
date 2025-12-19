const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    comment1: {type: String, required: true},
    comment2: {type: String},
    comment3: {type: String},
    comment4: {type: String},
    comment5: {type: String},
    comment6: {type: String}
})

const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel