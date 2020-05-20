const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

app.use(async (req, res) => {
  const url: string = req.query.url;

  const browser = await puppeteer.launch({
    headless: true,
  });

  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; Touch; rv:11.0) like Gecko";
  const page = await browser.newPage();
  await page.setUserAgent(ua);
  await page.goto(url);

  const selecter =
    "div.tweet.js-stream-tweet.js-actionable-tweet.js-profile-popup-actionable.dismissible-content.original-tweet.js-original-tweet.has-cards.has-content > div.content > div.stream-item-header > small";
  const html: string = await page.$$eval(selecter, (items) =>
    items
      .map((item) => item.innerHTML)
      .join("")
      .replace(/\n+/g, "\n")
      .replace(/ {2}<a href="/g, "https://twitter.com")
      .replace(/" class.*/g, "")
      .trim()
  );
  const url_json = JSON.stringify(html.split("\n"));

  browser.close();

  res.set("Content-type", "text/json");
  res.send(url_json);
});

app.listen("3000", () => {
  console.info("start");
});
