const apikey = "7a4a77d02c22a5ff5164b0b81b7b040b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kmph";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        console.log(data);
    }
}
searchBox.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkWeather(searchBox.value);
    }
});

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});