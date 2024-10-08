const express = require("express");
const listsController = require('./controllers/listsController');

const router = express.Router();

// Rotas listas
router.get('/', listsController.initial);
router.get('/app', listsController.index);

// Rotas tarefas

module.exports = router;