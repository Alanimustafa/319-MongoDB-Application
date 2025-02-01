// ALL DEPENDENCIES
const express = require('express'); // Requireing Express.
const app = express(); // Creating an instance of Express.
const mongoose = require('mongoose'); // Requireing Mongoose.
require('dotenv').config(); // Requireing dotenv.

// IMPORTING MODELS
// const Sedan = require('./models/sedan.js'); // Requireing the Sedan model.

// Importing data from databases
const sedansRouter = require ('./routers/sedansRouter.js'); // Importing the sedan vehicles router.



// MIDDLEWARE
mongoose.connect(process.env.VEHICLE_API_URL) // Connecting to the database.
mongoose.connection.on('connected', () => console.log(`Connected to the database. ${mongoose.connection.name} `)) // If the connection is successful, log it.


app.use(express.urlencoded({ extended: false })); // disabling extend the Body-Parser Middleware

app.set('view engine', 'ejs');  // Set EJS as the template engine
app.set('views', './views');    // Specify the directory for views

// THE ROUTES


// HOME PAGE/ ROOT ROUTE
app.get("/", async (req, res) => {
    res.render("homePage.ejs") ;
});

// using the routes
app.use('/sedans', sedansRouter); // App using the students router


// app.get("/sedans", async (req, res) => {
//     const sedansInventory = await Sedan.find() // Finding all the sedans in the database.
//     console.log(sedansInventory);
//     res.send(sedansInventory) ;
//     // res.render("/views/sedans.ejs", { sedan: sedansInventory}) ;
// });
// INDEX ROUTE



// Starting the Server
const PORT = process.env.PORT || 3000; // Setting the port.
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
}) // Starting the server.