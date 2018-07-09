const { argv } = require('./config/yargs');
const todo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let command = argv._[0];
switch (command) {
    case 'add':
        console.log('ADD NEW TASK');
        let newTodo = todo.add(argv.description);
        console.log(newTodo);
        break;
    case 'list':
        console.log('SHOW TASK LIST');
        let todoList = todo.list(argv.status);
        console.log('======== TODO LIST ========'.green);
        todoList.forEach(task => {
            console.log(task.description);
            console.log('Status', task.status === true ? 'DONE'.green : 'TODO'.red);
            console.log('---------------------------'.green);
        });
        break;
    case 'update':
        console.log('UPDATE EXISTING TASK');
        let updateResult = todo.update(argv.description, argv.status);
        console.log('Update result', updateResult);
        break;
    case 'delete':
        console.log('DELETING EXISTING TASK');
        let deleteResult = todo.deleteTask(argv.description);
        console.log('Delete result', deleteResult);
        break;
    default:
        console.log(`Command "${command}" is not valid`);
        break;
}