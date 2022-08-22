const btn = document.querySelector('button');
const form = document.querySelector('.search-form');
const search = document.querySelector('#search');

const cityName = document.querySelector('.city-name');
const mainTemp = document.querySelector('.main-temp');
const feelsLikeTemp = document.querySelector('.feels-like');
const cityHumidity = document.querySelector('.humidity');
const icon = document.querySelector('img');
const minTemperature = document.querySelector('.min-temp');
const maxTemperature = document.querySelector('.max-temp');
const weatherCondition = document.querySelector('.weather-condition');
const visibility = document.querySelector('.visibility');
const cloudiness = document.querySelector('.cloudiness');

btn.addEventListener('click', weatherAPI);
form.addEventListener('submit', weatherAPI);

//get weather data from API 

async function weatherAPI(e) {
    let searchValue = search.value;

    if(!searchValue) {
        alert('Must enter a city name');
    }
    e.preventDefault();

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4af338f9a4a4bfc6ef0dfbe08ae0fe35&units=metric`, {mode: 'cors'});
        if(!response.ok) throw new Error(`${searchValue} is not a valid city`);
        const weatherData = await response.json();
        console.log(weatherData);
        displayWeather(weatherData);

    }
    catch(err) {
        console.log(err);
        return null;
    };
    return weatherAPI;
}

//display weather data

function displayWeather(weatherData) {

        icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
        cityName.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
        mainTemp.innerHTML = `Temperature: ${(weatherData.main.temp).toFixed(1)} °C`; 
        weatherCondition.innerHTML = `${(weatherData.weather[0].description).charAt(0).toUpperCase()}` + `${(weatherData.weather[0].description).slice(1)}`;
        feelsLikeTemp.innerHTML = `Feels like: ${(weatherData.main.feels_like).toFixed(1)} °C`;
        cityHumidity.innerHTML = `Humidity index: ${weatherData.main.humidity} %`;
        minTemperature.innerHTML = `Min: ${(weatherData.main.temp_min).toFixed(1)} °C`;
        maxTemperature.innerHTML = `Max: ${(weatherData.main.temp_max).toFixed(1)} °C`;
        visibility.innerHTML = `Visibility: ${(weatherData.visibility/1000).toFixed(1)} km`;
        cloudiness.innerHTML = `Cloudiness: ${(weatherData.clouds.all).toFixed(1)} %`;
}







