const fetch = require('node-fetch');
const cheerio = require('cheerio');

export default function handler(req, res) {
  fetch(req.query.url) // fetch the url
    .then((r) => r.text()) // get the text from the response
    .then((html) => res.status(200).end(cheerio.load(html)('title').text())) // return the html title text
    .catch((_) => res.status(400).json('Bad URL'))
}
