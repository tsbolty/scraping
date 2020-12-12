// const path = require('path')
// const scrape = require('website-scraper');

// const options = {
//   urls: ['https://www.nytimes.com/'],
//   directory: path.join(__dirname + '/output')
// };

// scrape(options).then((result) => console.log(result));
// ______________________________________

// const axios = require("axios")

// axios.get('https://www.rtd-denver.com/app/nextride/stop/34236').then(response =>{
//   console.log(response)
// })
// ____________________________________

// const puppeteer = require('puppeteer');
// const url = 'https://www.nytimes.com/';

// puppeteer
//   .launch()
//   .then(function(browser) {
//     return browser.newPage();
//   })
//   .then(function(page) {
//     return page.goto(url).then(function() {
//       return page.content();
//     });
//   })
//   .then(function(html) {
//     console.log(html);
//   })
//   .catch(function(err) {
//     //handle error
//   });

// ______________________________________

const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://www.rtd-denver.com/app/nextride/stop/34236';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('p', html).each(function() {
      console.log($(this).text());
      process.exit()
    });
  })
  .catch(function(err) {
    console.log("Nope. Didn't work")
  });