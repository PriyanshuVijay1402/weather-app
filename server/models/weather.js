const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  location: String,
  startDate: String,
  endDate: String,
  weatherData: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Weather", weatherSchema);



