const puppeteer = require('puppeteer');

const url = 'https://www.fl.ru/projects/';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //   await page.setRequestInterception(true);
  // page.on('request', (request) => {
  //     if (['image', 'stylesheet', 'font', 'script'].indexOf(request.resourceType()) !== -1) {
  //         request.abort();
  //     } else {
  //         request.continue();
  //     }
  // });

  await page.goto(url);
  await page.waitFor(6000)
  // await page.waitForSelector('.h2 a:first-child');

  const pageLinks = await page.$$('h2 a:first-child');

  for (let i = 0; i < pageLinks.length; i++) {

    await page.goto(url);
    // await page.waitForSelector('.b-post__link');
    await page.waitFor(6000)

    const link = pageLinks[i];
    const linkUrl = await page.evaluate(link => link.href, link);
    console.log(linkUrl)
    await link.click()

    // await page.waitForSelector('#budget_block > span');
    await page.waitFor(6000)

    const budgetElement = await page.$('#budget_block > span')
    const budget = await page.evaluate(budgetElement => budgetElement.textContent, budgetElement);
    console.log(budget)
  }

  // const pageLinks = await page.evaluate(() => {
  //   return document.querySelectorAll('.b-post__link')
  // });

  await browser.close();
})();
