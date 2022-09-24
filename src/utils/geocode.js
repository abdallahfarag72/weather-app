const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=e5dbcdaf2a3085847027750f26f99a95&query=${encodeURIComponent(address)}&limit=1`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location service!', undefined);
        } else if (response.body.error || response.body.data.length === 0) {
            callback('Unable to find coordanites! Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                location: response.body.data[0].label
            })
        }
    })
}

module.exports = geocode