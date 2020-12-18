const path = require('path')
const scrape = require('website-scraper');

const options = {
  urls: ['https://www.lifesize.com/en/newyear'],
  directory: path.join(__dirname + '/output')
};

scrape(options).then((result) => console.log(result));