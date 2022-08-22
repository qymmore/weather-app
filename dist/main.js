/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const btn = document.querySelector('button');\nconst form = document.querySelector('.search-form');\nconst search = document.querySelector('#search');\n\nconst cityName = document.querySelector('.city-name');\nconst mainTemp = document.querySelector('.main-temp');\nconst feelsLikeTemp = document.querySelector('.feels-like');\nconst cityHumidity = document.querySelector('.humidity');\nconst icon = document.querySelector('img');\nconst minTemperature = document.querySelector('.min-temp');\nconst maxTemperature = document.querySelector('.max-temp');\nconst weatherCondition = document.querySelector('.weather-condition');\nconst visibility = document.querySelector('.visibility');\nconst cloudiness = document.querySelector('.cloudiness');\n\nbtn.addEventListener('click', weatherAPI);\nform.addEventListener('submit', weatherAPI);\n\n//get weather data from API \n\nasync function weatherAPI(e) {\n    let searchValue = search.value;\n\n    if(!searchValue) {\n        alert('Must enter a city name');\n    }\n    e.preventDefault();\n\n    try {\n        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=4af338f9a4a4bfc6ef0dfbe08ae0fe35&units=metric`, {mode: 'cors'});\n        if(!response.ok) throw new Error(`${searchValue} is not a valid city`);\n        const weatherData = await response.json();\n        console.log(weatherData);\n        displayWeather(weatherData);\n\n    }\n    catch(err) {\n        console.log(err);\n        return null;\n    };\n    return weatherAPI;\n}\n\n//display weather data\n\nfunction displayWeather(weatherData) {\n\n        icon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;\n        cityName.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;\n        mainTemp.innerHTML = `Temperature: ${(weatherData.main.temp).toFixed(1)} °C`; \n        weatherCondition.innerHTML = `${(weatherData.weather[0].description).charAt(0).toUpperCase()}` + `${(weatherData.weather[0].description).slice(1)}`;\n        feelsLikeTemp.innerHTML = `Feels like: ${(weatherData.main.feels_like).toFixed(1)} °C`;\n        cityHumidity.innerHTML = `Humidity index: ${weatherData.main.humidity} %`;\n        minTemperature.innerHTML = `Min: ${(weatherData.main.temp_min).toFixed(1)} °C`;\n        maxTemperature.innerHTML = `Max: ${(weatherData.main.temp_max).toFixed(1)} °C`;\n        visibility.innerHTML = `Visibility: ${(weatherData.visibility/1000).toFixed(1)} km`;\n        cloudiness.innerHTML = `Cloudiness: ${(weatherData.clouds.all).toFixed(1)} %`;\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;