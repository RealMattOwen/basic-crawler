const axios = require('axios');
const cheerio = require('cheerio');

const siteRoot = process.argv[2];

axios.get(siteRoot).then(({ data }) => {
	const $ = cheerio.load(data);

	const filteredHrefArray =  $('a').map((i, el) => $(el).attr('href')).get().filter(href => href.includes(siteRoot));

	console.log([ ...new Set(filteredHrefArray) ]);
});