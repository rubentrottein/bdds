const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BearSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Bear = mongoose.model('Bear', BearSchema)

module.exports = Bear;