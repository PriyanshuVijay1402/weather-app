const express = require("express");
const axios = require("axios");
const Weather = require("../models/weather");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  const { location, startDate, endDate } = req.body;

  try {
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const weatherData = weatherRes.data.list.filter((item) => {
      const itemDate = item.dt_txt.split(" ")[0];
      return itemDate >= startDate && itemDate <= endDate;
    });

    const newRecord = new Weather({ location, startDate, endDate, weatherData });
    const saved = await newRecord.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  const data = await Weather.find();
  res.json(data);
});

// Update by ID
router.put("/:id", async (req, res) => {
  const { location, startDate, endDate } = req.body;

  try {
    const weatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const weatherData = weatherRes.data.list.filter((item) => {
      const itemDate = item.dt_txt.split(" ")[0];
      return itemDate >= startDate && itemDate <= endDate;
    });

    const updated = await Weather.findByIdAndUpdate(
      req.params.id,
      { location, startDate, endDate, weatherData },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete by ID
router.delete("/:id", async (req, res) => {
  await Weather.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
