(()=>{const e=document.querySelector("button"),t=document.querySelector(".search-form"),a=document.querySelector("#search");async function o(e){let t=a.value;t||console.log("Must enter a city name"),e.preventDefault();try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&appid=4af338f9a4a4bfc6ef0dfbe08ae0fe35&units=metric`,{mode:"cors"}),a=await e.json();console.log(a)}catch(e){console.log(e)}}e.addEventListener("click",o),t.addEventListener("submit",o)})();