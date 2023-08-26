const apiKey = "251bbdcc7eba6fbfbcda9b65e33c25b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
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
        
        switch(data.weather[0].description){
            case "clear sky":
                weatherIcon.className = "bi bi-sun-fill";
                weatherDesc.innerHTML = "Cielo despejado";
                break;
            case "few clouds":
                weatherIcon.className = "bi bi-cloud-sun-fill";
                weatherDesc.innerHTML = "Pocas Nubes";
                break;
            case "scattered clouds":
                weatherIcon.className = "bi bi-cloudy";
                weatherDesc.innerHTML = "Nubes dispersas";
                break;
            case "broken clouds":
                weatherIcon.className = "bi bi-clouds";
                weatherDesc.innerHTML = "Nubes discontinuas";
                break;
            case "shower rain":
                weatherIcon.className = "bi bi-cloud-rain-fill";
                weatherDesc.innerHTML = "Lluvia ligera";
                break;
            case "rain":
                weatherIcon.className = "bi bi-cloud-rain-heavy-fill";
                weatherDesc.innerHTML = "Lluvia";
                break;
            case "thunderstorm":
                weatherIcon.className = "bi bi-cloud-lightning-rain-fill";
                weatherDesc.innerHTML = "Lluvia tormentosa";
                break;
            case "snow":
                weatherIcon.className = "bi bi-snow";
                weatherDesc.innerHTML = "Nieve";
                break;
            case "mist":
                weatherIcon.className = "bi bi-cloud-fog2-fill";
                weatherDesc.innerHTML = "Niebla";
                break;
        
        }
        document.querySelector(".weather").style.display = "block"
    }
};

searchBtn.addEventListener("click", () => {
    CheckW(search.value);
});
//console.log(apiKey);

