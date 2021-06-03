// SELECT NECESSARY ELEMENTS
class UI {
  constructor() {
    this.location = document.querySelector("#location");
    this.temp = document.querySelector("#temperature");

    this.time = document.querySelector("#time");
    this.icon = document.querySelector("#weather-img");
    this.desc = document.querySelector("#description");
    this.humidity = document.querySelector("#humidity");
    this.feelsLike = document.querySelector("#feels-like");
    this.wind = document.querySelector("#wind");
    this.latlon = document.querySelector("#latlon");
    this.locRight = document.querySelector("#location-right");
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}`;
    this.temp.textContent = `${weather.current.temp_c}°c(${weather.current.temp_f}°f)`;

    this.desc.textContent = weather.current.condition.text;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.locRight.textContent = `Location: ${weather.location.name}, ${weather.location.country}`;
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    this.time.textContent = `Time: ${weather.location.localtime}`;
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}°C (${weather.current.feelslike_f}°F)`;
    this.wind.textContent = `Wind: ${weather.current.wind_mph}`;
    this.latlon.textContent = `Lat: ${weather.location.lat} & Lon: ${weather.location.lon} `;
  }
}
