const path = require('path')
const scrape = require('website-scraper');
const options = {
  urls: ['https://www.rtd-denver.com/app/nextride/stop/34236'],
  directory: path.join(__dirname + '/output')
};

scrape(options).then((result) => console.log(result));