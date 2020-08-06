const fetch = require('node-fetch');
const cheerio = require('cheerio');
const tress = require('tress');
const fs = require('fs');

const habrUrl = 'https://freelance.habr.com/tasks?_=1596613017168&categories=development_all_inclusive%2Cdevelopment_backend%2Cdevelopment_frontend%2Cdevelopment_prototyping%2Cdevelopment_ios%2Cdevelopment_android%2Cdevelopment_desktop%2Cdevelopment_bots%2Cdevelopment_games%2Cdevelopment_1c_dev%2Cdevelopment_scripts%2Cdevelopment_voice_interfaces%2Cdevelopment_other';
const results = [];

const queue = tress((url, callback) => {
  fetch(url)
    .then((data) => data.text())
    .then((html) => {
      console.log(`PARSING: ${url}`);

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

      const nextPagePath = $('#pagination > div > a.next_page').attr('href');

      // if (nextPagePath) {
      //   const nextPageUrl = `https://freelance.habr.com${nextPagePath}`;

      //   queue.push(nextPageUrl);
      // }

      callback();
    })
    .catch((err) => console.log('Error!', err));

}, 10);

// эта функция выполнится, когда в очереди закончатся ссылки
queue.drain = () => {
  // fs.writeFileSync('data.json', JSON.stringify(results));
  console.log(results);
};

// добавляем в очередь ссылку на первую страницу списка
queue.push('https://freelance.habr.com/tasks/316084');
