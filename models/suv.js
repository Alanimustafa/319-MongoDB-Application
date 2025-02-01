// MONGOOSE SUV MODEL
const mongoose = require('mongoose');

// Create a schema for our SUV model
const suvSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Suv = mongoose.model("Book", suvSchema) // create our model!
module.exports = Suv;