const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    feedback1: {type: String, required: true},
    feedback2: {type: String},
    feedback3: {type: String},
    feedback4: {type: String},
    feedback5: {type: String},
    feedback6: {type: String},
    status: {
        type: String,
        // enum: ["Pending", "Done", "In-progress"],
        default: "Pending"
    }
},{
    timestamps: true
})

const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel