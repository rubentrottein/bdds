const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;