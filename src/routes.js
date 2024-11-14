const express = require("express");
const listsController = require('./controllers/listsController');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

// Rotas listas
router.get('/', listsController.initial);
router.get('/app', listsController.index);
router.get('/app/create_list', listsController.create_list);


router.post('/app/create_list', listsController.save_list);
router.post('/app/delete_list/:id', listsController.delete_list);

// Rotas tarefas

router.get('/app/:id', tasksController.index);

module.exports = router;