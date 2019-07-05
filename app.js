const yargs = require('yargs');
const { addTask, deleteTask,showList } = require('./todo')
yargs.command({
    command: 'add',
    describe: 'add todo tasks',
    builder: {
        title: {
            describe: 'title for todo task to add',
            alias: 't',
            demandOption: true,
            type: 'string',
        },
        description: {
            describe: 'description of todo task',
            alias: 'd',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        addTask(argv.title, argv.description)
        console.log('todo task is added ..  '  + argv.title)
    }

})
yargs.command({
    command: 'delete',
    describe: 'delete todo tasks',
    builder: {
        title: {
            describe: 'title for todo task to delete',
            alias: 't',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (argv) => {
        deleteTask(argv.title, argv.description)
        console.log('todo task is deleted .. ' + argv.title)
    }

})
yargs.command({
    command: 'list',
    describe: 'Show List of tasks',
    builder: {
        title: {
            describe: 'title for todo task to delete',
            alias: 't',
            demandOption: false,
            type: 'string',
        }
    },
    handler: () => {
        showList()
    }

})

yargs.parse()