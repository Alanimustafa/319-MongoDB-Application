const express = require('express'); // Requireing Express.
const sedansRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Sedan = require('../models/sedan.js'); // Requireing the Sedan model.


sedansRouter.route("/")
.get(async (req, res) => {
    const sedansInventory = await Sedan.find() // Finding all the sedans in the database.
    console.log(sedansInventory);
    res.send(sedansInventory) ;
    // res.render("/views/sedans.ejs", { sedan: sedansInventory}) ;
});

module.exports = sedansRouter; // Exporting the sedans router.