const fetch = require('node-fetch');
const cheerio = require('cheerio');

const habrUrl = 'https://freelance.habr.com/tasks?_=1596613017168&categories=development_all_inclusive%2Cdevelopment_backend%2Cdevelopment_frontend%2Cdevelopment_prototyping%2Cdevelopment_ios%2Cdevelopment_android%2Cdevelopment_desktop%2Cdevelopment_bots%2Cdevelopment_games%2Cdevelopment_1c_dev%2Cdevelopment_scripts%2Cdevelopment_voice_interfaces%2Cdevelopment_other&page=1';

const getOffers = async (url) => {
  const results = [];
  const response = await fetch(url);
  const html = await response.text();

  const $ = cheerio.load(html);

  $('.content-list__item').each((i, el) => {
    const $element = $(el);

    const title = $element.find('article div header div.task__title a').text();
    const relLink = $element.find('article div header div.task__title a').attr('href');
    const publishTime = $element.find('article div header div.task__params span.params__published-at').text();
    const moneyAmmount = $element.find('article aside div span').text();

    const offer = {
      title,
      link: `https://freelance.habr.com${relLink}`,
      publishTime,
      moneyAmmount,
    };

    results.push(offer);
  });

  return results;
};

getOffers(habrUrl)
  .then(data => console.log(data));
