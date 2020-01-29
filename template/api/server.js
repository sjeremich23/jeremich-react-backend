const express = require("express");

const apiRouter = require("./api-router.js");
const configMiddleware = require("./middleware/config-middleware");

const server = express();
configMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
