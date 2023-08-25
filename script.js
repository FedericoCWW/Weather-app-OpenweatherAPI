const apiKey = "251bbdcc7eba6fbfbcda9b65e33c25b7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".display input");
const searchBtn = document.querySelector(".display button");
async function CheckW(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

};

searchBtn.addEventListener("click", () => {
    CheckW(search.value);
});
CheckW()
//console.log(apiKey);

