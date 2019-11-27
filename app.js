const request = require('request');

const url = 'https://api.darksky.net/forecast/f00eca571fb141085313ed93d4ec2518/37.8267,-122.4233';

request({url: url}, (error, response) => {
  console.log(response);
});
