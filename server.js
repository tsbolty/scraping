
const path = require('path')
const scrape = require('website-scraper');
const options = {
  urls: ['https://www.rtd-denver.com/app/nextride/stop/34236'],
  directory: path.join(__dirname + '/path/to/save1/')
};

scrape(options).then((result) => console.log(result[0].Resource.children));