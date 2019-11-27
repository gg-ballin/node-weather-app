/* eslint-disable indent */
const request = require('request');

// const url = 'https://api.darksky.net/forecast/f00eca571fb141085313ed93d4ec2518/37.8267,-122.4233';

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log( response.body.daily.data[0].summary +
//         ' It is currently ' + response.body.currently.temperature +
        // eslint-disable-next-line max-len
//         ' degress out. There is a ' + response.body.currently.precipProbability +
//         '% chance of rain');
//   }
// });

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ2VyZ29tMzI4IiwiYSI6ImNrM2h1MnFidDAxZGYzbWxieTZpZ2YzaGwifQ.wJnvyB5Qd5sqWBO6nmPizQ';

request({url: geocodeURL, json: true}, (error, response)=> {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try again');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log('Latitude: ' +latitude + '\n' + 'Longitude: ' + longitude);
  }
});

