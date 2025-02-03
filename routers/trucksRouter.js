const express = require('express'); // Requireing Express.
const trucksRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Truck = require('../models/truck.js'); // Requireing the Truck model.


trucksRouter.route("/")
.get(async (req, res) => {
    const trucksInventory = await Truck.find() // Finding all the trucks in the database.
    // console.log(trucksInventory); // FOR TEST: Logging the trucks inventory.
    res.render("./vehicleViews/index.ejs", { vehicle: trucksInventory, type: "Truck"}) ;
    
}) 
.post ( async (req, res) => {
    const { isAWD, isElectric, isHybrid } = req.body;

    // Convert "on" to true, and undefined or other values to false
    const truckData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    Truck.create(truckData)
         res.redirect("/trucks"); // Redirecting to the trucks route.
});

//creating a new truck vehicle using the ejs file
trucksRouter.get("/new", async (req, res) => {
    const trucksInventory = await Truck.find()
    res.render("./vehicleViews/create.ejs", { vehicle: trucksInventory, type: "Truck"}) ;
});

//posting a new truck to the database


// Deleting a truck vehicle
trucksRouter.delete("/:id", async (req, res) => {
    await Truck.findByIdAndDelete(req.params.id)
    res.redirect("/trucks")
});

// Updating a truck vehicle
trucksRouter.put("/:id", async (req, res) => {
    // Handle the 'isCompleted' checkbox data
    const { isAWD, isElectric, isHybrid } = req.body;

    // Converting "on" to true, and undefined or other values to false
    const truckData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    // Update TRUCK Vehicle
    await Truck.findByIdAndUpdate(req.params.id, req.body);

    // Going back to TRUCKS route
    res.redirect(`/trucks/${req.params.id}`);
});

// Updating a truck vehicle using the ejs file form
trucksRouter.get("/:id/update", async (req, res) => {
    const currentVehicle = await Truck.findById(req.params.id)
    console.log(currentVehicle)
    res.render("vehicleViews/update.ejs", {
        vehicle: currentVehicle, type: "Truck"
    });
});

// Showing a truck vehicle by id parameter
trucksRouter.get("/:id", async (req, res) => {
    const truck = await Truck.findById(req.params.id) // Finding a truck by its ID.
    // console.log(truck); // FOR TEST: Logging the truck.
    res.render("./vehicleViews/show.ejs", { vehicle: truck }) ;
})

module.exports = trucksRouter; // Exporting the trucks router.