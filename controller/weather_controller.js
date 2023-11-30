const axios = require('axios');
const API_KEY = process.env.WEATHER_API_KEY;
const URL = process.env.WEATHER_URL;

const getCityWeatherInfo = async (req, res) => {
    const city = req.query.city;
    let result;
    try {
        result = await axios.get(URL + "weather?q=" + city + "&appid=" + API_KEY + "&units=metric");
        res.json(result.data);
    } catch (err) {
        console.error(`failed city api due to ${err}`);
    }
};

module.exports = { getCityWeatherInfo }