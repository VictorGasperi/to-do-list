const express = require("express");
const listsController = require('./controllers/listsController');

const router = express.Router();

// Rotas listas
router.get('/', listsController.initial);
router.get('/app', listsController.index);
router.get('/app/create_list', listsController.create);
router.post('/app/create_list', listsController.save);

// Rotas tarefas

module.exports = router;