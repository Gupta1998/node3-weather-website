const request = require('postman-request')


const forecast = (lat, long, callback) => {
    const url = ''
    request({ url, json: true }, (erro, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.percipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast