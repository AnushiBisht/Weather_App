const searchBar = document.querySelector(".search-bar");
const locationEl = document.querySelector(".location");
const dateEl = document.querySelector(".date");
const tempEl = document.querySelector(".temp");
const weatherEl = document.querySelector(".weather");


searchBar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getWeather(searchBar.value);
  }
});

function getWeather(city) {
  if (city.trim() === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(`/api/weather?city=${city}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        alert("City not found");
        return;
      }
      displayWeather(data);
    })
    .catch(error => console.log(error));
}

function displayWeather(data) {
  const now = new Date();

  locationEl.textContent = `${data.name}, ${data.sys.country}`;
  dateEl.textContent = now.toDateString();
  tempEl.textContent = `${Math.round(data.main.temp)} °C`;
  weatherEl.textContent = data.weather[0].description;
}
