// class constructor to select ui elements
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
    this.date = document.querySelector("#date");
  }

  //  Adding elements to the UI with paint

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
    this.temp.textContent = `${weather.current.temp_c}°c(${weather.current.temp_f}°f)`;
    this.date.textContent = `Date: ${weather.location.localtime.slice(0, 10)}`;

    this.desc.textContent = weather.current.condition.text;
    this.icon.setAttribute("src", weather.current.condition.icon);
    this.locRight.textContent = `Location: ${weather.location.name}, ${weather.location.country}`;
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    this.time.textContent = `Time: ${weather.location.localtime.slice(10)}`;
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}°C (${weather.current.feelslike_f}°F)`;
    this.wind.textContent = `Wind: ${weather.current.wind_mph}`;
    this.latlon.textContent = `Lat: ${weather.location.lat} & Lon: ${weather.location.lon} `;
  }
}
