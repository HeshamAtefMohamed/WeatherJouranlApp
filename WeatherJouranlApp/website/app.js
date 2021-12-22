/* Global Variables */
//setup a var for apiKey, that gotten from OpenWeatherMap.org
const apiKey="b0bacaabb7fdad1e4acc8f5acc90f4c7";
//setup a var for api call link
const apiUrl ='http://api.openweathermap.org/data/2.5/weather?zip=';
   //user entered data
   const date=document.querySelector("#date");
   const temp=document.querySelector("#temp");
   const content=document.querySelector("#content");
  
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

//get the generate button
const generate=document.querySelector("#generate");
//add event listner on butten, that when click a callback fun will be excuted
generate.addEventListener('click',generateFun)

//Built the callback fun of the eventListener
function generateFun(e){
    e.preventDefault();
    //user entered zip code
    const zipCode =document.querySelector("#zip").value;
    //user entered feelings
    const feelings=document.querySelector("#feelings").value;
    //call for call  async GET request with the there parameters
    getWeatherData(apiUrl,zipCode,apiKey).then(function (data) {
        console.log(data);
            //setup a post request, which POST route is setup to add these values(temp ,date ,feelings)
            postWeatherData("/saveData", { temp: data.main.temp, date: newDate, feelings: feelings });
        })
        //update ui
        .then(()=>updateUi());       
};

//declaration of getWeatherData (get request function)
const getWeatherData=async (apiUrl, zipCode, apiKey)=>{

    const res=await fetch(apiUrl+ zipCode+"&appid=" + apiKey+"&units=metric");
    //for resolved value, solve the fun
    try{
        const data= await res.json();
        return data
    }
    //for not resolved value, get the error
    catch(error){
        console.log("error",error);
    }
};

//Declare the postWeatherData var for fun 
const postWeatherData= async(url = '', data = {})=>{
     //use fetch request to send requests to server side with sytax"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
       
     const res= await fetch('/saveData', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    //Do the resolved code
    try{
        const data= await res.json();
        return data;
    }
    //show the error for not resolved code
    catch(error){
        console.log("error",error)
    }
    console.log(data); 
};
//Update the UI
const updateUi= async()=>{
    const req= await fetch ('/getData');
    //run the solution
    try{
        const requiredData = await req.json();
        temp.innerHTML="Tempreture is"+ requiredData.temp;
        date.innerHTML="Date is"+  requiredData.date;
        feelings.innerHtml="Feelings is "+  requiredData.feelings;

    }
    //if there was an error
    catch(error){
    console.log('error'+ error);
    }
}; 
