const tasksModel = require('../models/tasksModel');

const tasksController = {

    // GET /app/:id
    index: (req, res) => {

        const id = req.params.id;

        tasksModel.setAllTasks(id);

        const tasksToDo = tasksModel.getAllToDoTasks();
        const tasksCompleted = tasksModel.getAllCompletedTasks();

        res.render('list', { tasksToDo, tasksCompleted });
    
    }

}

module.exports = tasksController;