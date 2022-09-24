const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c91d6339641b2766796e61a6fd34b478&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            const data = `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.is_day === 'no' ? 'night' : 'day'} time. The temperature is ${response.body.current.temperature} degrees. It feels like ${response.body.current.feelslike} degrees out.`
            callback(undefined, data);
        }
    })
}

module.exports = forecast