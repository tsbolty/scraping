// DOES THE SAME THING AS THE PUPPETEER FILE BUT USES CHEERIO TO TARGET AND PARSE ELEMENT TYPES, ID'S AND CLASSES ON THE PAGE.

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
    console.log(html)
    $('p', html).each(function() {
      console.log($(this).text());
      process.exit()
    });
  })
  .catch(function(err) {
    console.log("Nope. Didn't work")
  });