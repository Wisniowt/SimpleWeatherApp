"use strict";

// import * as axios from 'axios';

const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.get("/:city", sendForecast);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function sendForecast(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    let city = req.params.city;

    let url =
        "http://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=metric" +
        "&APPID=3e2d927d4f28b456c6bc662f34350957";
    console.log(url);
    axios
        .get(url)
        .then((response) => {
            console.log(response.data);

            res.json({ result: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
}
