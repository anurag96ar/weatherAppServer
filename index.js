require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
const weatherRoutes = require("./route/weather_route")



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/", weatherRoutes);

app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`);
})

