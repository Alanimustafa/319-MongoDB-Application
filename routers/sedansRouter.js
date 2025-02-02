const express = require('express'); // Requireing Express.
const sedansRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Sedan = require('../models/sedan.js'); // Requireing the Sedan model.


sedansRouter.route("/")
.get(async (req, res) => {
    const sedansInventory = await Sedan.find() // Finding all the sedans in the database.
    // console.log(sedansInventory); // FOR TEST: Logging the sedans inventory.
    res.render("./vehicleViews/index.ejs", { vehicle: sedansInventory}) ;
    
});

sedansRouter.get("/new", async (req, res) => {
    const sedansInventory = await Sedan.find()
    res.render("./vehicleViews/create.ejs", { vehicle: sedansInventory});
});

sedansRouter.post ("/" , async (req, res) => {
    const { isAWD, isElectric, isHybrid } = req.body;

    // Convert "on" to true, and undefined or other values to false
    const sedanData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    Sedan.create(sedanData)
        // .then(sedan => res.status(201).json(sedan))
        // .catch(err => res.status(400).json(err));  
         res.redirect("/sedans"); // Redirecting to the sedans route.
});



sedansRouter.get("/:id", async (req, res) => {
    const sedan = await Sedan.findById(req.params.id) // Finding a sedan by its ID.
    // console.log(sedan); // FOR TEST: Logging the sedan.
    res.render("./vehicleViews/show.ejs", { vehicle: sedan }) ;
});

module.exports = sedansRouter; // Exporting the sedans router.