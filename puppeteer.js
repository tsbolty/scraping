// PUPPETEER IS SUPPOSED TO BE ABLE TO VIRTUALLY NAVIGATE THE WEBSITE TO CHANGE PAGES, CLICK BUTTONS, TRIGGER JS RENDERING BEFORE IT RETURNS CONTENT
const puppeteer = require('puppeteer');
const url = 'https://www.nytimes.com/';

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
    console.log(html);
  })
  .catch(function(err) {
    // handle error
  });