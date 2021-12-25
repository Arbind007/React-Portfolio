const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    designation: { type: String, required: true },
    recommendationMessage: { type: String, required: true },
  });
  
  module.exports = Recommendation = mongoose.model("recommendation", recommendationSchema);
  