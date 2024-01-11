const express = require("express");
const identityRouter = express.Router();
const identityController = require("../controller/identity");
// identityRouter.post("/", identityController.post);
module.exports = identityRouter;