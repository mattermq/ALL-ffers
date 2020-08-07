const express = require('express');
const scrapeHabr = require('../lib/scrapers/habr-scraper.js');

const router = express.Router();

router.get('/habr', async (req, res) => {
  scrapeHabr();
});

module.exports = router;
