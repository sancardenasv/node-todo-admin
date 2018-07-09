const description = {
    demand: true,
    alias: 'd'
}

const status = {
    alias: 's',
    default: true
}

const argv = require('yargs')
    .command('add', 'Create new to do task', {
        description
    }).command('update', 'Updates task; by default sets task completed', {
        description,
        status
    }).command('list', 'Lists available tasks', {
        status: {
            alias: 's'
        }
    })
    .command('delete', 'Deletes task by description', {
        description
    }).help().argv;

module.exports = {
    argv
}