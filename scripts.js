async function getWeather(apikey, zip) {
  const apiKey = apikey;
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;

  try {
    const res = await fetch(path);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = getWeather;