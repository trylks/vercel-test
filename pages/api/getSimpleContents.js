const fetch = require('node-fetch');
const { Readability } = require('@mozilla/readability');
const { JSDOM } = require('jsdom');

export default function handler(req, res) {
  fetch(req.query.url) // fetch the url
    .then((r) => r.text()) // get the text from the response
    .then((html) => {
      const document = new JSDOM(html).window.document;
      const content = new Readability(document).parse().content;
      res.status(200).end(content);
    })
    .catch((_) => res.status(400).json('Bad URL'))
}
