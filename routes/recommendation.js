const router = require("express").Router();
const Recommendation = require("../models/RecommendationModel");

router.post("/", async (req, res) => {
  try {
        let body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        req.on("end", () => {
          let joinedwords = Buffer.concat(body);
          let jsontext = JSON.parse(joinedwords);
          let name = jsontext.name;
          let email = jsontext.email;
          let company = jsontext.company;
          let designation = jsontext.designation;
          let recommendationMessage = jsontext.recommendationMessage
          // console.log(name + " " + email + " " + company + " " + designation + " " + recommendationMessage);
          const newRecommendation = new Recommendation({
            name,
            email,
            company,
            designation,
            recommendationMessage,
          })
          newRecommendation.save();
        }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;