const express = require('express');
const scrapeHabr = require('../lib/scrapers/habr-scraper.js');

const router = express.Router();

router.get('/:website', async (req, res) => {
  const { website } = req.params;

  if (website === 'habr') {
    try {
      scrapeHabr();
    } catch (err) {
      console.log('Error Parsing!!!', err);
    }
  }
});

module.exports = router;
