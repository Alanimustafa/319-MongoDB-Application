SBA 319: MongoDB Database Application
`````````````````````````````````````

APPLICATION NAME:   DEALERSHIP INVENTORY

IMPORTANT: Please note .gitignore file has been added to remove node_modules and .env from GitHub tracking. In  order to run the code make sure installing the node package and use the required credentails to connected to MongoDB database.

IMPORTANT: When adding a vehicle to the database, the TYPE of the vehicle is REQUIRED. User CAN NOT add a vehicle without type. Available types (SEDAN - SUV - TRUCK).


|| FOR USERS (CLIENTS)
HOW IT WORKS:
- The home page contains three links 
    1. Sedan Vehicles Inventory.
    2. SUV Vehicles Inventory.
    3. Truck Vehicles Inventory.

- By clicking any of the given links, the application will redirect the user to the selected vehicle inventory.
- Each inventory page shows the current inventory list after getting the contents from the MongoDB database (Inventory).
- In each page, uer can :
    1. Switch between the inventory collections by clicking the desired link.
    2. Add new vehicle by click on New VEHICLE button.
    3. Open (read) any vehicle document by click on the vehicle link (year - make).
    4. HOME and BACK buttons (links) have been added to ease the navegation.
- Vehicle Details
    In the vehicle page, the user will be able to:
    1. Check the vehicle details.
    2. Delete a vehicle from the inventory.
    3. Update the vehicle details.

 
MongoDB Database and Collections 
    The database contains three collections:
    1. Sedan Vehicles Inventory (sedan).
    2. SUV Vehicles Inventory (suv).
    3. Truck Vehicles Inventory (truck).

|| FOR DEVELOPERS:
``````````````````
App Description:
- The server application (APP) uses ExpressJS package to listen to the local host.
- Mongoose package has been installed to be used in the application to connect the APP to the invironment of the database(Inventory).
- Mongoose Validation Schema has been used for each type of vehicle inventories. 
- Mongoose Schema requires the user to enter the vehicle type by adding the index validation to the type.
- EJS view engine has been used to create the User Interface (GUI).
- CRUD Routers have been created. one for each vehicle type. 

File Structure:

The main entry file : server.js
Folders: 
    A. Modules
        - sedan.js --> Sedan Vehicle Validation Schema.
        - suv.js --> Suv Vehicle Validation Schema.
        - truck.js --> Truck Vehicle Validation Schema.
    B. Routers
        - sedanRouter.js --> CRUD Routes for sedan Vehicles.
        - suvRouter.js --> CRUD Routes for suv Vehicles.
        - truckRouter.js --> CRUD Routes for truck Vehicles.
    C. Views
        - homepage.ejs  --> EJS file for the homepage.
        - vehicleViews
            1. create.ejs   --> This page to create a new inventory entry.
            2. index.ejs   --> This page to display the current inventory.
            3. show.ejs     --> This page showes each vehicle details.
            4. update.ejs   --> Thjs page to update the selected vehicle information.
    
