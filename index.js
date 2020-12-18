
// JUST USING BUILT IN FETCH METHOD.
// fetch("https://www.rtd-denver.com/app/nextride/stop/34236").then(res =>{
//   res.json()
// }).then(data =>{
//   console.log(data)
// })
// _________________________________________

// USES A WEBSITE-SCRAPER PACKAGE. CAN CONSOLE.LOG(RESULT) AND CREATES AN OUTPUT DIRECTORY WITH HTML, CSS AND JS FILES
const path = require('path')
const scrape = require('website-scraper');

const options = {
  urls: ['https://www.lifesize.com/en/newyear'],
  directory: path.join(__dirname + '/output')
};

scrape(options).then((result) => console.log(result));
// ______________________________________

// USING THE AXIOS PACKAGE. RETURNS BASICALLY THE SAME THING AS FETCH
// const axios = require("axios")

// axios.get('https://www.rtd-denver.com/app/nextride/stop/34236').then(response =>{
//   console.log(response)
// })
// ____________________________________

// PUPPETEER IS SUPPOSED TO BE ABLE TO VIRTUALLY NAVIGATE THE WEBSITE TO CHANGE PAGES, CLICK BUTTONS, TRIGGER JS RENDERING BEFORE IT RETURNS CONTENT
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

// DOES THE SAME THING AS THE ONE ABOVE BUT USES CHEERIO TO TARGET AND PARSE ELEMENT TYPES, ID'S AND CLASSES ON THE PAGE.
// const puppeteer = require('puppeteer');
// const $ = require('cheerio');
// const url = 'https://www.rtd-denver.com/app/nextride/stop/34236';

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
//     console.log(html)
//     $('p', html).each(function() {
//       console.log($(this).text());
//       process.exit()
//     });
//   })
//   .catch(function(err) {
//     console.log("Nope. Didn't work")
//   });

