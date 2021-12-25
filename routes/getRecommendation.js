const router = require("express").Router();
const Recommendation = require("../models/RecommendationModel");

router.get("/", async (req, res) => {
  try {
    const recommendation = await Recommendation.find();
    res.json(recommendation.reverse());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;