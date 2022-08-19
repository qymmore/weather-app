const btn = document.querySelector('button');
const form = document.querySelector('.search-form');
const search = document.querySelector('#search');

btn.addEventListener('click', weatherAPI);
form.addEventListener('submit', weatherAPI);

//process JSON data

function convertData(data) {
        const {
            name: city,
            main: {temp: temperature, feels_like: feelsLike, humidity, temp_min: minTemp, temp_max: maxTemp},
            weather: {description: conditions, icon: icon, main: main},
            sys: {country: countryCode},
        } = data;
    return {city, temperature, feelsLike, humidity, minTemp, maxTemp, conditions, icon, countryCode, main};
}

//get weather data from API 

async function weatherAPI(e) {
    let searchValue = search.value;

    if(!searchValue) {
        alert('Must enter a city name');
    }
    e.preventDefault();

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4af338f9a4a4bfc6ef0dfbe08ae0fe35&units=metric`, {mode: 'cors'});
        if(!response.ok) throw new Error(`${searchValue} is not a valid city`);
        const weatherData = convertData(await response.json());
        console.log(weatherData);
    }
    catch(err) {
        console.log(err);
        return null;
    };
}
return {weatherAPI};
