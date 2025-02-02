// MONGOOSE TRUCK MODEL
const mongoose = require('mongoose');

// Create a schema for our TRUCK model
const truckSchema = new mongoose.Schema({
    type: String,
    year: String,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Truck = mongoose.model("Truck", truckSchema) 
module.exports = Truck; // Sedan Schema Export.