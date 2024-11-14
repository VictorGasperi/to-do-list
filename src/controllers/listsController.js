const listsModel = require('../models/listsModel');
const tasksController = require('../controllers/tasksController');

const listsController = {

    // GET /
    initial: (req, res) => {
        res.render('initial');
    },

    // GET /app
    index: (req, res) => {

        lists = listsModel.getAllLists();

        res.render('index', { lists });

    },

    // GET /app/create_list
    create_list: (req, res) => {
        res.render('createList');
    },

    // POST /app/create_list
    save_list: (req, res) => {
        const { name } = req.body;
        const newList = listsModel.createList(name);
        listsModel.saveList(newList);
        res.redirect('/app');
    },

    // POST /app/delete_list/:id
    delete_list: (req, res) => {
        const id = req.params.id;

        listsModel.deleteList(id);

        res.redirect('/app');
    }

};

module.exports = listsController;