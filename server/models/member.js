const mongoose = require('mongoose')


const Schema = mongoose.Schema
const memberSchema = new Schema({
    name: String,
    surname: String,
    address1: String,
    address2: String,
    tell: String,
    umail: String,
    lineId: String
})


module.exports = mongoose.model('members', memberSchema)