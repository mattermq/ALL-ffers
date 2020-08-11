const express = require('express');
const scrapeHabr = require('../lib/scrapers/habr-scraper.js');
const scrapeWeblancer = require('../lib/scrapers/weblancer-scraper.js');
const scrapePchel = require('../lib/scrapers/pchel-scraper.js');

const router = express.Router();

router.get('/:website', async (req, res) => {
  const { website } = req.params;

  switch (website) {
    case 'habr':
      try {
        scrapeHabr();
      } catch (err) {
        console.log('Error Parsing!', err);
      }
      break;
    case 'weblancer':
      try {
        scrapeWeblancer();
      } catch (err) {
        console.log('Error Parsing!', err);
      }
      break;
    case 'pchel':
      try {
        scrapePchel();
      } catch (err) {
        console.log('Error Parsing!', err);
      }
    default:
      return;
  }
});

module.exports = router;
