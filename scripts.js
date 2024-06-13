// Functions 
function getWeather(apikey, zip, callback) {
  const apiKey = apikey
  const units = 'imperial'
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
  fetch(path)
    .then(res => res.json())
    .then(json => {
      callback(json);
    })
    .catch(err => console.log(err.message))
}

module.exports = getWeather;