const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    national : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        min: 0
    },
    status : {
        type: Number,
        min: 0
    },
    date: Date
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;