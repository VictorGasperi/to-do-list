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

    }

    // GET /app/create_list

    // POST /app/create_list



};

module.exports = listsController;