const express = require("express");
const server = express();
const bodyParser = require('body-parser')

const createResponse = require('./create-response.js')

server
    .use(bodyParser.json())
    .post("/webhook", (req, res) => res.json(createResponse(req.body)))
    .listen(process.env.PORT)
