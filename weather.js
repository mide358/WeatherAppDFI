class Weather {
  constructor(city, country) {
    this.apiKey = "a7e2efc703cf47d89cd130932212105";
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API

  async getWeather() {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&q=${this.country}&aqi=no`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
