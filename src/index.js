function refreshWeatherData(response){
    console.log(response.data);
let cityTemperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city-name");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let wind = response.data.wind.speed;



cityElement.innerHTML= response.data.city;
cityTemperatureElement.innerHTML= Math.round(temperature);
descriptionElement.innerHTML= response.data.condition.description;
humidityElement.innerHTML= response.data.temperature.humidity;
windElement.innerHTML=Math.round(wind);

}
function searchCity(city){
//make an api call and update ui
let apiKey = "395ff84db8f9ao7752e401ec31at7fcd";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit{metric}`;
axios.get(apiUrl).then(refreshWeatherData);
}
function changeContent(event){
event.preventDefault();
let searchInput = document.querySelector("#form-input-data");
searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#my-form");
searchFormElement.addEventListener("submit", changeContent);

searchCity("Kampala");