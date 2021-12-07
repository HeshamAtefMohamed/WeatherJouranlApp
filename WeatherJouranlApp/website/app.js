/* Global Variables */
// ser variables for api key and call link 
const apiKey="b0bacaabb7fdad1e4acc8f5acc90f4c7";
const apiCall=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();