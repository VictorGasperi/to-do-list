const generateRandomID = require('../utils/randomID');

let lists = [ { id: 'MFzTAE9hwU', name: 'Lista 1', tasks: [ {id: 'MFwU', name: 'Tarefa 1 da lista 1', isCompleted: false} ]}, { id: 'S2FRyjplVf', name: 'Lista 2', tasks: [ {id: 'S2FR', name: 'Tarefa 1 da lista 2', isCompleted: false} ]}] // Armazenamento de todas as listas de tarefas

const listsModel = {

    getAllLists() {
        return lists;
    },

    getListById(id) {
        return lists.find(list => list.id === id);
    },

    createList(name) {
        const newList = {

            id: generateRandomID(10),
            name: name,
            tasks: []

        }
        return newList
    },

    saveList(list) {
        lists.push(list);
    },

    deleteList(id) {
        lists = lists.filter(list => list.id !== id);
    },

    loadList(id) {
        
        const list = this.getListById(id);

        return {
            name: list.name,
            tasks: list.tasks
        }

    }

};

module.exports = listsModel;