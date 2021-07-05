const express = require('express');
const { httpGetPersonalData } = require('./whoami.controller');

const whoAmIRouter = express.Router();

whoAmIRouter.get('/', httpGetPersonalData);

module.exports = whoAmIRouter;