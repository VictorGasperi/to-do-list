const express = require("express");
const listsController = require('./controllers/listsController');

const router = express.Router();

router.get('/', listsController.initial);

module.exports = router;