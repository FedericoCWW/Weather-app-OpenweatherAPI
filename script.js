const apiKey = "251bbdcc7eba6fbfbcda9b65e33c25b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&lang=sp&q=";
const search = document.querySelector(".display input");
const searchBtn = document.querySelector(".display button");
const weatherIcon = document.getElementById("weather-icon")
const weatherDesc = document.getElementById("weather-desc")
async function CheckW(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if (response.status == 404){
        alert("Ciudad Invalida")
    }else{
        let data = await response.json();
    
        console.log(data)
        console.log(weatherIcon.innerHTML)
    
        document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
        document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        
        switch(data.weather[0].main){
            case "Clear":
                weatherIcon.className = "bi bi-sun-fill";
                break;
            case "Clouds":
                weatherIcon.className = "bi bi-cloud-sun-fill";
                break;
            case "Drizzle":
                weatherIcon.className = "bi bi-cloud-drizzle-fill";
                break;
            case "Rain":
                weatherIcon.className = "bi bi-cloud-rain-heavy-fill";
                break;
            case "Thunderstorm":
                weatherIcon.className = "bi bi-cloud-lightning-rain-fill";
                break;
            case "Snow":
                weatherIcon.className = "bi bi-snow";
                break;
            case "Atmosphere":
                weatherIcon.className = "bi bi-cloud-fog2-fill";
                break;
        }
        weatherDesc.innerHTML = data.weather[0].description;
        document.querySelector(".weather").style.display = "block"
    }
};

searchBtn.addEventListener("click", () => {
    CheckW(search.value);
});
//console.log(apiKey);

