const express = require('express');
const scrapeHabr = require('../lib/scrapers/habr-scraper.js');
const scrapeWeblancer = require('../lib/scrapers/weblancer-scraper.js');

const router = express.Router();

router.get('/:website', async (req, res) => {
  const { website } = req.params;

  switch (website) {
    case 'habr':
      try {
        scrapeHabr();
      } catch (err) {
        console.log('Error Parsing!!!', err);
      }
      break;
    case 'weblancer':
      try {
        scrapeWeblancer();
      } catch (err) {
        console.log('Error Parsing!', err);
      }
      break;
    default:
      return;
  }
});

module.exports = router;
