/* Global Variables */
// set a variable for api key  
const apiKey="b0bacaabb7fdad1e4acc8f5acc90f4c7";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//Second APi&Routes
    //Start with an event on the generate button that when click on button, after entering data a specific fun will be excuted

        //call the button
        const generateButton=document.querySelector("#generate");
        // set an event from an  event listener click& async fun on the button 
        generateButton.addEventListener("click",async()=>{
            //get the zipCode
                const zipCode=document.querySelector("#zip");
            //get the felling 
                const feelings=document.querySelector("#feelings");
            // set a variable for call link of api with zipCode & apiKey with units following metric    
                const apiLink=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;
        /*to ensure every thing works clearly, use try and catch
        If ok then try will running, else then catch will run*/ 
        try{            
        //the main usage for this fun is when click the button, entered data is collected
            // use fetch method to get data
                const res= await fetch(apiLink)
            //transform the the collected data form stream form to JS object form by json"pasrsing"
            //await is for an async operation 
                const resData=await res.json();
            // make a variable to get the required info from the coming resData(temperature)
                const temp=resData.main.temp;
            //check step, data is collected successfully
                console.log("Data is successfully returned from the external API.");

        //use fetch request to send requests to server side with sytax"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            //As /saveData endpoint & post request
            fetch('/saveData', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // the  three child divs with the ids
                        date:newDate,
                        temp:temp,
                        feelings:feelings
                })
            });
        //use fetch request to send requests to server side
        //As /getData endpoint & get request
        fetch('/getData', {
            method: 'get', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // the  three child divs with the ids
                    date:newDate,
                    temp:temp,
                    feelings:feelings
            })
        });
                }catch(error){
                console.log(error);
                };     
        
        });