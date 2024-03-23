const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeReliefWebJobs() {
  try {
    const url = `https://reliefweb.int/jobs`;
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const jobList = [];

    $(".rw-river-article--job").each((index, element) => {
      const title = $(element).find(".rw-river-article__title").text().trim();
      const company = $(element)
        .find(".rw-entity-meta__tag-link")
        .text()
        .trim();
      const location = $(element)
        .find(".rw-entity-country-slug__link")
        .text()
        .trim();

      const jobObj = {
        title,
        company,
        location,
      };

      jobList.push(jobObj);
    });

    return jobList;
  } catch (error) {
    console.error("scrapeDataFromWebsite error: ", error);
    return [];
  }
}

module.exports = {
  scrapeReliefWebJobs,
};
