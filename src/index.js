function changeContent(event){
event.preventDefault();
let searchInput = document.querySelector("#form-input-data");
let cityElement = document.querySelector("#city-name");
cityElement.innerHTML= searchInput.value;
}
let searchFormElement = document.querySelector("#my-form");
searchFormElement.addEventListener("submit", changeContent);