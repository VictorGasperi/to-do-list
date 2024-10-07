const generateRandomID = require('../utils/randomID');

let lists = [] // Armazenamento de todas as listas de tarefas

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

        }
    },

    saveList(list) {
        lists.push(list);
    },

    deleteList(id) {
        lists = lists.filter(list => list.id !== id);
    }

};

module.exports = listsModel;