let apiKey = "862d2954c5df23b86529201af553dbaf";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let searchCity = document.querySelector(".searchBox input");
let searchBtn = document.querySelector(".searchBox button");
let weatherIcon = document.querySelector(".icons")
let discription = document.querySelector(".situation")
// let backgroundImg = document.querySelector(".weather-app")


async function checkWeather(city){
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)

    document.querySelector(".city1").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"&#x2103;"
    document.querySelector(".humidity1").innerHTML = data.main.humidity +"%"
    document.querySelector(".wind").innerHTML = data.wind.speed*3.6+ " Km/hr"

    switch (data.weather[0].main) {
        case 'Clear':
            weatherIcon.src = 'clear.png';
            discription.innerHTML = "Clear";
            break;
            case 'Rain':
                weatherIcon.src='rain.png';
                discription.innerHTML = "Rain";
                // backgroundImg.style.backgroundImage.src='rain.jpg'
                break;

            case 'Snow':
                weatherIcon.src='snow.png';
                discription.innerHTML = "Snow";
                break;

            case 'Clouds':
                weatherIcon.src='cloud1.png';
                discription.innerHTML = "Clouds";
                break;
            case 'Mist':
                weatherIcon.src='mist.png';
                discription.innerHTML = "Mist";
                break;
            case 'Fog':
                weatherIcon.src='raincloud.png';
                discription.innerHTML = "Fog";
                break;
        
            default:
                weatherIcon.src = 'day.jpg';
                discription.innerHTML = "Clear";
        }
       
} 
searchBtn.addEventListener("click",()=>{
    checkWeather(searchCity.value);

})
