const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        typeof: String,
        require: true
    },
    user_Id: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: null
    },
    username: {
        type: String,
        required: true
    }
})

module.exports = mongoose.Schema.model('Post, postSchema')