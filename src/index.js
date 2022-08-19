//get weather data from API

const btn = document.querySelector('button');
const form = document.querySelector('.search-form');
const search = document.querySelector('#search');

btn.addEventListener('click', weatherAPI);
form.addEventListener('submit', weatherAPI);

async function weatherAPI(e) {
    let searchValue = search.value;

    if(!searchValue) {
        console.log('Must enter a city name');
    }
    e.preventDefault();

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4af338f9a4a4bfc6ef0dfbe08ae0fe35&units=metric`, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData);
    }
    catch(err) {
        console.log(err);
    };
};