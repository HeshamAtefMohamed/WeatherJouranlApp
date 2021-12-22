// Setup empty JS object to act as endpoint for all routes
projectData = {};
//setup the localhost port
const port=3000;

// Require Express to run server and routes
const express= require("express");
// Start up an instance of app
const app=express();
// Cors for cross origin allowance
const cors= require("cors");
//body-parser for using json and tranform data from stream to js form
const bodyParser= require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// use cors  for providing a Connect/Express middleware
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
//use listen method with port num and a callback fun to run the server
app.listen(port,()=>{
console.log("Your server is running clearly on port:",port)
});
/* Second initialize post and get requests
init get & post requests by two arguments (route,callback fun) for server side*/

    //use the get request to send the data that client side requested 
        app.get("/getData", (req,res)=>{
            res.send(projectData)
            console.log(projectData);
        });

        //use the post request to save the data that sent from the client side
        app.post("/saveData",addData)
        //built getData fun
        function addData(req,res){
        /*save the required data in projectData object
        temp, date, and feelings(response)
        */
            projectData = {
                temp: req.body.temp,
                date: req.body.date,
                feelings: req.body.feelings
            };
            res.send(projectData)
            //to Make sure your POST route is setup to add each of these values with a key to projectData.
            console.log("projectData");
        };