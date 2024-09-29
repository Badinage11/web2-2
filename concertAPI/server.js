var express = require('express');// Import the Express framework
const cors = require("cors"); // Import cors

// Create an instance of an Express application
var app = express();
app.use(cors());

// Import the API controller module for handling specific routes
var concertAPI = require("./controllerAPI/api-controller");

var bodyparser=require("body-parser");

// Use Body-Parser to parse JSON requests
app.use(bodyparser.json());
// Use Body-Parser to parse URL-encoded requests with extended syntax
app.use(bodyparser.urlencoded({extended:false}));

app.use("/api/fundraiser", concertAPI);


app.listen(3060);

// Log a message to the console indicating that the server is running
console.log("Server up and running on port 3060");
