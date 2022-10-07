

const yargs = require('yargs')

// console.log(yargs.argv);

// console.log(process.argv)  // present bydefaut by node
// console.log(process.argv[2])


// console.log(yargs.argv)  // yargs node package 

//customise the version 
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
    console.log('Adding a new note!')
    }
    })
    console.log(yargs.argv);

    /* ------ run like npm app.js add -----*/

    //create delete command
yargs.command({
    command: 'delete',
    describe: 'delete a note',
    handler: function () {
    console.log('deleteing a note!')
    }
    })
    
    console.log(yargs.argv);
    /* ------ run like npm app.js delete -----*/