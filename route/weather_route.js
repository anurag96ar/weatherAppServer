

const express = require('express');
const router = express.Router();
const {  getCityWeatherInfo } = require('../controller/weather_controller');



router.get("/getWeatherInfo/city", getCityWeatherInfo);

module.exports = router;