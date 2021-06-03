// initialize storage
const storage = new Storage();

// get stored weather
const weatherLocation = storage.getLastLocation();

// initialize weather object

const weather = new Weather(weatherLocation.city, weatherLocation.country);

//initialize UI
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.querySelector("#save-btn").addEventListener("click", (e) => {
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;

  weather.changeLocation(city, country);

  // set location
  storage.setLastLocation(city, country);

  getWeather();

  $("#locModal").modal("hide");
});

function save(e) {
  if (e.key === "Enter") {
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;

    weather.changeLocation(city, country);

    // set location
    storage.setLastLocation(city, country);

    getWeather();

    $("#locModal").modal("hide");
  }
}

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
