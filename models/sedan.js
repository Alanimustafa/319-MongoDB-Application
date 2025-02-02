// MONGOOSE SEDAN MODEL
const mongoose = require('mongoose');

// Create a schema for our SUV model
const sedanSchema = new mongoose.Schema({
    type: String,
    year: String,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Sedan = mongoose.model("Sedan", sedanSchema) 
module.exports = Sedan; // Sedan Schema Export.