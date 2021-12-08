// Setup empty JS object to act as endpoint for all routes
projectData = {};
// set up port number
const port=3000;
// Require Express to run server and routes
const express= require("express")
//require cors 
const cors= require("cors")
//require bady-parser
const bodyParser=require("body-parser")
// Start up an instance of app
const app= express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//to setup server it's used listen method and take two parameter port num and callbak fun
app.listen(port, ()=>{
    //feedback from console.log to ensure that the server is running
    console.log("the server is running clearly at port:",port)
                    });

