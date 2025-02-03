const express = require('express'); // Requireing Express.
const sedansRouter = express(); // Creating an instance of Express.

// IMPORTING MODELS
const Sedan = require('../models/sedan.js'); // Requireing the Sedan model.


sedansRouter.route("/")
.get(async (req, res) => {
    const sedansInventory = await Sedan.find() // Finding all the sedans in the database.
    // console.log(sedansInventory); // FOR TEST: Logging the sedans inventory.
    res.render("./vehicleViews/index.ejs", { vehicle: sedansInventory, type: "Sedan"}) ;
    
})
//posting a new sedan to the database
.post ( async (req, res) => {
    try {
        const { isAWD, isElectric, isHybrid } = req.body;

        // Convert "on" to true, and undefined or other values to false
        const sedanData = {
            ...req.body,
            isAWD: isAWD === "on",
            isElectric: isElectric === "on",
            isHybrid: isHybrid === "on"
        };
    
        Sedan.create(sedanData)
             res.redirect("/sedans"); // Redirecting to the sedans route.
    } catch (error) {
        res.send(`
            <html>
                    <head>
                        <title><%= type %> Inventory</title>
                    </head>
                    <body style="background-color:#333f3c;">
                        <h2 style="color:red; border: solid orange 5px; display:flex; justify-self: center;">Error: ${error}</h2>    
                        <h3 style="color:red; border: solid orange 5px; display:flex; justify-self: center;">Error: Tpye of the vehicle is required</h3>
                        <br>
                        <a style="color:orange" href="http://localhost:3000/">HOME</a>
                    </body>
                </html>
            
            `);
    }
});

//creating a new sedan vehicle using the ejs file
sedansRouter.get("/new", async (req, res) => {
    const sedansInventory = await Sedan.find()
    res.render("./vehicleViews/create.ejs", { vehicle: sedansInventory, type: "Sedan"}) ;
});



// Deleting a sedan vehicle
sedansRouter.delete("/:id", async (req, res) => {
    await Sedan.findByIdAndDelete(req.params.id)
    res.redirect("/sedans")
});

// Updating a sedan vehicle
sedansRouter.put("/:id", async (req, res) => {
    // Handle the 'isCompleted' checkbox data
    const { isAWD, isElectric, isHybrid } = req.body;

    // Converting "on" to true, and undefined or other values to false
    const sedanData = {
        ...req.body,
        isAWD: isAWD === "on",
        isElectric: isElectric === "on",
        isHybrid: isHybrid === "on"
    };

    // Update SEDAN Vehicle
    await Sedan.findByIdAndUpdate(req.params.id, req.body);

    // Going back to SEDANS route
    res.redirect(`/sedans/${req.params.id}`);
});

// Updating a sedan vehicle using the ejs file form
sedansRouter.get("/:id/update", async (req, res) => {
    const currentVehicle = await Sedan.findById(req.params.id)
    console.log(currentVehicle)
    res.render("vehicleViews/update.ejs", {
        vehicle: currentVehicle, type: "Sedan"
    });
});

// Showing a sedan vehicle by id parameter
sedansRouter.get("/:id", async (req, res) => {
    const sedan = await Sedan.findById(req.params.id) // Finding a sedan by its ID.
    // console.log(sedan); // FOR TEST: Logging the sedan.
    res.render("./vehicleViews/show.ejs", { vehicle: sedan }) ;
})

module.exports = sedansRouter; // Exporting the sedans router.