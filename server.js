// ALL DEPENDENCIES
const express = require('express'); // Requireing Express.
const app = express(); // Creating an instance of Express.
const mongoose = require('mongoose'); // Requireing Mongoose.
require('dotenv').config(); // Requireing dotenv.


// MIDDLEWARE
mongoose.connect(process.env.VEHICLE_API_URL) // Connecting to the database.
mongoose.connection.once('open', () => console.log(`Connected to the database. ${mongoose.connection.name} `)) // If the connection is successful, log it.
mongoose.connection.on('error', (error) => console.log(error)) // If there is an error, log it.

app.use(express.urlencoded({ extended: true })); // Using the Body-Parser Middleware



// THE ROUTES

// HOME PAGE/ ROOT ROUTE
app.get("/", async (req, res) => {
    res.render("homePage.ejs") ;
});



// Starting the Server
const PORT = process.env.PORT || 3000; // Setting the port.
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`)
}) // Starting the server.