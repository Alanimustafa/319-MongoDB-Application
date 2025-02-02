// MONGOOSE SUV MODEL
const mongoose = require('mongoose');

// Create a schema for our SUV model
const suvSchema = new mongoose.Schema({
    type: String,
    year: String,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Suv = mongoose.model("Suv", suvSchema) 
module.exports = Suv; // Suv Schema Export.