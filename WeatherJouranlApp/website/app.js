/* Global Variables */
// ser variables for api key and call link 
const apiKey="b0bacaabb7fdad1e4acc8f5acc90f4c7";
const apiCall=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Second APi&Routes
    //Start with an event on the generate button that when click on button, after entering data a specific fun will be excuted

        //call the button
        const button=document.getElementById(generate);
        // set an event with event listener click& async fun
        button.addEventListener("click",async()=>{
            constzipCode=document.querySelector("#zip");
            const feeling=document.querySelector("feelings");
            const apiCall=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

        //the main usage for this fun is when click the button, get the data that entered
            // use fetch method to get data
            const res= await fetch(apiCall)
            //transforme the the collected data form stream form to JS object form by json
            //await is for async operation 
            const data=await res.json();
            // make a variable to get the required info from the coming data(temperature)
            const temp=data.main.temp;
        
        

            

            
        });