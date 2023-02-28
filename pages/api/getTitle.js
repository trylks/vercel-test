const fetch = require('node-fetch');
const cheerio = require('cheerio');


export default function handler(req, res) {
  fetch(req.body.url) // fetch the url
    .then((r) => r.text()) // get the text from the response
    .then((html) => res.status(200).json( // send our response
      cheerio.load(html)('title').text())) // with the text of the title of the html retrieved
}