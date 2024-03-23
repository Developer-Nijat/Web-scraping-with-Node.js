const express = require("express");
const router = express.Router();

const { scrapeReliefWebJobs } = require("../helpers");

router.get("/relief-web", async function (req, res) {
  try {
    const data = await scrapeReliefWebJobs();
    res.json(data);
  } catch (error) {
    console.error("relief-web jobs error: ", error);
    res.status(500).json(error);
  }
});

module.exports = router;
