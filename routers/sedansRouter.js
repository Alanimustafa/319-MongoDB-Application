const express = require('express'); // Requireing Express.
const sedansRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Sedan = require('../models/sedan.js'); // Requireing the Sedan model.


sedansRouter.route("/")
.get(async (req, res) => {
    const sedansInventory = await Sedan.find() // Finding all the sedans in the database.
    // console.log(sedansInventory); // FOR TEST: Logging the sedans inventory.
    res.render("./sedansViews/index.ejs", { sedan: sedansInventory}) ;
    
});

module.exports = sedansRouter; // Exporting the sedans router.