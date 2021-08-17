const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    gender : String,
    phone : Number,
    company : String,
    birthday : {
        type: Date,
        Date:'yyyy-MM-dd',
        required: true,
        trim: true,
    }
})

const contactdb = mongoose.model('contactdb', schema);

module.exports = contactdb;