const fs = require('fs');
const db = './db/data.json';

let todoList = [];

const saveDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile(db, data, (err) => {
        if (err) throw err;
        console.log(`Task list saved in "${db}"`);
    });
}

const loadDb = () => {
    try {
        todoList = JSON.parse(fs.readFileSync(db, 'utf8'));
    } catch (error) {
        todoList = [];
    }
}

const add = (description) => {
    loadDb();
    let todo = {
        description,
        status: false
    };
    todoList.push(todo);
    saveDb();

    return todo;
}

const list = (status) => {
    loadDb();
    if (status) {
        return todoList.filter((task) => {
            return task.status.toString() === status;
        });
    }
    return todoList;
}

const update = (description, status = true) => {
    loadDb();
    let index = todoList.findIndex(task => {
        return task.description === description;
    });
    if (index >= 0) {
        todoList[index].status = status;
        saveDb();
        return true;
    }
    return false;
}

const deleteTask = (description) => {
    loadDb();
    let newTodoList = todoList.filter((task) => {
        return task.description !== description;
    });
    if (newTodoList.length === todoList.length) {
        return false;
    } else {
        todoList = newTodoList;
        saveDb();
        return true;
    }
}

module.exports = {
    add,
    list,
    update,
    deleteTask
}