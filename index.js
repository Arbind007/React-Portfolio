const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5001;

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

app.use("/recommendation", require("./routes/recommendation"));
app.use("/getrecommendation", require("./routes/getRecommendation"));

app.listen(PORT, ()=> {
    console.log(`app is running on port ${PORT}`);
});