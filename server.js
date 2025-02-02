// ALL DEPENDENCIES
const express = require('express'); // Requireing Express.
const app = express(); // Creating an instance of Express.
const mongoose = require('mongoose'); // Requireing Mongoose.
require('dotenv').config(); // Requireing dotenv.

// I couldn't delete a document before adding this package
const methodOverride = require('method-override'); // Requireing method-override
app.use(methodOverride('_method')); // Using method-override

// IMPORTING MODELS
// const Sedan = require('./models/sedan.js'); // Requireing the Sedan model.

// Importing data from databases
const sedansRouter = require ('./routers/sedansRouter.js'); // Importing the sedan vehicles router.

const suvsRouter = require ('./routers/suvsRouter.js'); // Importing the suv vehicles router.

const trucksRouter = require ('./routers/trucksRouter.js'); // Importing the truck vehicles router.


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
app.use('/sedans', sedansRouter); // App using the SEDAN router
app.use('/suvs', suvsRouter); // App using the SUV router
app.use('/trucks', trucksRouter); // App using the TRUCK router


// INDEX ROUTE



// Starting the Server
const PORT = process.env.PORT || 3000; // Setting the port.
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
}) // Starting the server.