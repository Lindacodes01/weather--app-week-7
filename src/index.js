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
displayForecast(city);
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
	let today = days[date.getDay()];
	return `${today}, ${hours}:${minutes}`;
}
function dayToday(timestamp){
  let date = new Date(timestamp*1000);
  let days = ['sun', 'mon','Tue','Wed','Thu', 'Fri', 'Sat']

  return days[date.getDay()];
}
function displayForecast(city){
let apiKey = "395ff84db8f9ao7752e401ec31at7fcd";
let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&unit{metric}`;
axios(apiUrl).then(displayWeather);
}
function displayWeather(response){

  console.log(response.data); 
let forecastElement = document.querySelector("#forecast");
let forecastHtml = " "; 
response.data.daily.forEach(function(day, index){
  if (index < 5){
forecastHtml = forecastHtml + `
	 <span class="weather-forecast-day">
        <span class="weather-forecast-date">${dayToday(day.time)}</span>
        <span class="weather-forecast-icon">️<img src ="${day.condition.icon_url}" /></span>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>${Math.round(day.temperature.maximum)}°</strong>
          </div>
          <div class="weather-forecast-temperature">
            <strong>${Math.round(day.temperature.minimum)}°</strong>
          </div>
        </div>
      </span>`;
  }
				
});
forecastElement.innerHTML=forecastHtml;
		}
				searchCity("lisbon");
			
			