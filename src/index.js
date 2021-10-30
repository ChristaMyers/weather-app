let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = now.getHours() + ":" + now.getMinutes();
let h2 = document.querySelector("h2");

h2.innerHTML = `${day} ${time}`;

function cityChange(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=3c949ba49d38be2487ee278e0d2d4059&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data.weather[0].main);
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#current-temp");
  temp.innerHTML = `${temperature}°`;
  let weatherType = document.querySelector("#weather-type");
  weatherType.innerHTML = response.data.weather[0].main;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", cityChange);
