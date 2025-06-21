document.addEventListener('DOMContentLoaded', () => {
   const cityInput = document.getElementById('city-input');
   const getWeatherBtn = document.getElementById('get-weather-btn');
   const weatherInfo = document.getElementById('weather-info');
   const cityNameDisplay = document.getElementById('City-name');
   const temperature = document.getElementById('temperature');
   const description = document.getElementById('description');
   const errorMsg = document.getElementById('error-message');

   const API_KEY = "2506f8d75114ba1e1a541e461858b94a" ; //env variables

        getWeatherBtn.addEventListener('click' , async () => {
            const city = cityInput.value.trim()
            if(!city) return;

            //If you're making a web  request , it may throw an error
            // server/database is always in another continent

            try{
                const weatherData = await fetchWeatherData(city);
                displayWeatherData(weatherData);
            } catch (error) {
                showError();
            }
        })
   
   

   async function fetchWeatherData(city){
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}` ;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if(!response.ok){
        throw new Error(" City not found");
    }
    const data = await response.json()
    return data
   }

   function displayWeatherData(data){
         console.log(data);
         const {name, main, weather} = data;
         cityNameDisplay.textContent = name ;
         temperature.textContent = `Temperature : ${main.temp}`;
         description.textContent = `Weather : ${weather[0].description}`;

         //unlock the display
         weatherInfo.classList.remove('hidden');
          errorMsg.classList.add('hidden');
   }

   function showError(){
      weatherInfo.classList.add('hidden');
      errorMsg.classList.remove('hidden');
   }

})

