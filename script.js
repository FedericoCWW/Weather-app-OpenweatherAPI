const apiKey = "251bbdcc7eba6fbfbcda9b65e33c25b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".display input");
const searchBtn = document.querySelector(".display button");
const weatherIcon = document.getElementById("weather-icon")
async function CheckW(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)
    console.log(weatherIcon.innerHTML)

    document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    
    switch(data.weather[0].description){
        case "clear sky":
            weatherIcon.className = "bi bi-sun-fill";
            break;
        case "few clouds":
            weatherIcon.className = "bi bi-cloud-sun-fill";
            break;
        case "scattered clouds":
            weatherIcon.className = "bi bi-cloudy";
            break;
        case "broken clouds":
            weatherIcon.className = "bi bi-clouds";
            break;
        case "shower rain":
            weatherIcon.className = "bi bi-cloud-rain-fill";
            break;
        case "rain":
            weatherIcon.className = "bi bi-cloud-rain-heavy-fill";
            break;
        case "thunderstorm":
            weatherIcon.className = "bi bi-cloud-lightning-rain-fill";
            break;
        case "snow":
            weatherIcon.className = "bi bi-snow";
            break;
        case "mist":
            weatherIcon.className = "bi bi-cloud-fog2-fill";
            break;
    
    }

};

searchBtn.addEventListener("click", () => {
    CheckW(search.value);
});
CheckW()

//console.log(apiKey);

