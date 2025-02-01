// MONGOOSE TRUCK MODEL
const mongoose = require('mongoose');

// Create a schema for our SUV model
const truckSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Truck = mongoose.model("Book", truckSchema) // create our model!
module.exports = Truck;