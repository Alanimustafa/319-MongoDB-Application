// MONGOOSE SEDAN MODEL
const mongoose = require('mongoose');

// Create a schema for our SUV model
const sedanSchema = new mongoose.Schema({
    year: Number,
    make: String,
    model: String,
    isAWD: Boolean,
    isElectric: Boolean,
    isHybrid: Boolean,
});

const Sedan = mongoose.model("Book", sedanSchema) // create our model!
module.exports = Sedan;