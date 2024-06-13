async function getWeather(apikey, zip, unit = 'imperial') {
  const apiKey = apikey;
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`;

  try {
    const res = await fetch(path);
    const data = await res.json();

    // Create a new object with properties from the weather JSON
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

module.exports = getWeather;