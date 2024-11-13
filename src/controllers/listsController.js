const listsModel = require('../models/listsModel');

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
    create: (req, res) => {
        res.render('createList');
    },

    // POST /app/create_list
    save: (req, res) => {
        const { name } = req.body;
        const newList = listsModel.createList(name);
        listsModel.saveList(newList);
        res.redirect('/app');
    },

    // POST /app/delete_list/:id
    delete: (req, res) => {
        const id = req.params.id;

        listsModel.deleteList(id);

        res.redirect('/app');
    }
 

};

module.exports = listsController;