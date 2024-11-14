const generateRandomID = require('../utils/randomID');
const listsModel = require('../models/listsModel');

let tasksToDo = []
let tasksCompleted = []

const tasksModel = {

    setAllTasks(id) {
    
        const tasks = listsModel.loadTask(id);

        tasksToDo = tasks.filter(task => task.isCompleted === false);
        tasksCompleted = tasks.filter(task => task.isCompleted === true);
        
    },

    getAllToDoTasks() {

        return tasksToDo;

    },

    getAllCompletedTasks() {

        return tasksToDo;

    },

    getTaskById(id) {
        return tasksToDo.find(task => task.id === id);
    },

    createTask(name, listID) {
        const newTask = {
            id: listID + "_" + generateRandomID(10),
            name: name
        };
        return newTask;
    },

    saveTask(task) {
        tasksToDo.push(task);
    },

    concludeTask(id) {
        tasksCompleted.push(this.getTaskById(id));
        tasksToDo = tasksToDo.filter(task => task.id !== id);
    }

};

module.exports = tasksModel;