class Weather {
  constructor(apikey, unit = 'imperial') {
    this.apikey = apikey;
    this.unit = unit;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
  }

  async getWeatherByZip(zip) {
    const url = `${this.baseUrl}zip=${zip}&appid=${this.apikey}&units=${this.unit}`;
    return this.fetchWeather(url);
  }

  async getWeatherByCity(city) {
    const url = `${this.baseUrl}q=${city}&appid=${this.apikey}&units=${this.unit}`;
    return this.fetchWeather(url);
  }

  async getWeatherByGeo(coords) {
    const url = `${this.baseUrl}lat=${coords.lat}&lon=${coords.lon}&appid=${this.apikey}&units=${this.unit}`;
    return this.fetchWeather(url);
  }

  async fetchWeather(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      const weatherData = {
        temperature: data.main.temp,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country
      };

      return weatherData;
    } catch (err) {
      console.log(err.message);
    }
  }
}

export default Weather;