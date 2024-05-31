const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodTruckSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    menu: [{
        dish: {
            type: String,
            required: true
        },
        drink: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        }
    }]
})

const FoodTruck = mongoose.model('FoodTruck', FoodTruckSchema)

module.exports = FoodTruck;