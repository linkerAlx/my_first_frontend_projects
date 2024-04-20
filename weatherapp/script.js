const apikey = "b3b472289b33fdc75375a2d153222d6a";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkweather(city){
    // const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    if (!city) {
        console.error("Please enter a city name.");
        return; // Exit the function if city is empty
    }

    const response = await fetch(`${apiUrl}${city}&appid=${apikey}`);
    if (!response.ok) {
        console.error("Failed to fetch weather data:", response.statusText);
        return; // Exit the function if fetch fails
    }
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json(); 
        // console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h" ;
    
        if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src ="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src ="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src ="images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
checkweather()