function refreshWeatherData(response){
    console.log(response.data);
let cityTemperatureElement = document.querySelector("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector("#city-name");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
let wind = response.data.wind.speed;
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time*1000);

cityElement.innerHTML= response.data.city;
cityTemperatureElement.innerHTML= Math.round(temperature);
descriptionElement.innerHTML= response.data.condition.description;
humidityElement.innerHTML= response.data.temperature.humidity;
windElement.innerHTML=Math.round(wind);
timeElement.innerHTML= formatDate(date);
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
function formatDate(date){
	let minutes = date.getMinutes();
	let hours = date.getHours()
	let days = ['sunday', 'monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday']
	let today = days[date.getDate()];
	return `${today}, ${hours}:${minutes}`;
}
function displayWeather(){
let forecastElement = document.querySelector("#forecast");
let forecastdays = ['sunday', 'monday','Tuesday','Wednesday','Thursday', 'Friday', 'Saturday'];
let forecastHtml = " ";
forecastdays.forEach(function(day){
forecastHtml = forecastHtml + `
	 <span class="weather-forecast-day">
        <span class="weather-forecast-date">${day}</span>
        <span class="weather-forecast-icon">️</span>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature">
            <strong>9º</strong>
          </div>
        </div>
      </span>`;
				
});
forecastElement.innerHTML=forecastHtml;
		}
				searchCity("Kampala");
			displayWeather();