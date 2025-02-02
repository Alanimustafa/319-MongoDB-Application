const express = require('express'); // Requireing Express.
const suvsRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Suv = require('../models/suv.js'); // Requireing the Suv model.


suvsRouter.route("/")
.get(async (req, res) => {
    const suvsInventory = await Suv.find() // Finding all the suvs in the database.
    // console.log(suvsInventory); // FOR TEST: Logging the suvs inventory.
    res.render("./vehicleViews/index.ejs", { vehicle: suvsInventory, type: "Suv"}) ;
    
});

//creating a new suv vehicle using the ejs file
suvsRouter.get("/new", async (req, res) => {
    const suvsInventory = await Suv.find()
    res.render("./vehicleViews/create.ejs", { vehicle: suvsInventory, type: "Suv"}) ;
});

//posting a new suv to the database
suvsRouter.post ("/" , async (req, res) => {
    const { isAWD, isElectric, isHybrid } = req.body;

    // Convert "on" to true, and undefined or other values to false
    const suvData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    Suv.create(suvData)
         res.redirect("/suvs"); // Redirecting to the suvs route.
});

// Deleting a suv vehicle
suvsRouter.delete("/:id", async (req, res) => {
    await Suv.findByIdAndDelete(req.params.id)
    res.redirect("/suvs")
});

// Updating a suv vehicle
suvsRouter.put("/:id", async (req, res) => {
    // Handle the 'isCompleted' checkbox data
    const { isAWD, isElectric, isHybrid } = req.body;

    // Converting "on" to true, and undefined or other values to false
    const suvData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    // Update SUV Vehicle
    await Suv.findByIdAndUpdate(req.params.id, req.body);

    // Going back to SUVS route
    res.redirect(`/suvs/${req.params.id}`);
});

// Updating a suv vehicle using the ejs file form
suvsRouter.get("/:id/update", async (req, res) => {
    const currentVehicle = await Suv.findById(req.params.id)
    console.log(currentVehicle)
    res.render("vehicleViews/update.ejs", {
        vehicle: currentVehicle, type: "Suv"
    });
});

// Showing a suv vehicle by id parameter
suvsRouter.get("/:id", async (req, res) => {
    const suv = await Suv.findById(req.params.id) // Finding a suv by its ID.
    // console.log(suv); // FOR TEST: Logging the suv.
    res.render("./vehicleViews/show.ejs", { vehicle: suv }) ;
})

module.exports = suvsRouter; // Exporting the suvs router.