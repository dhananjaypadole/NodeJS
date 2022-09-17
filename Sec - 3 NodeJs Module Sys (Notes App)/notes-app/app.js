/******          ------------  Validator     -------------     ******/
const validator = require('validator');
console.log(validator.isEmail('dhananjay.padole@gmail.com'));
console.log(validator.isEmpty(''));
console.log(validator.isEmpty('jijipjj'));
console.log(validator.isURL('https://www.npmjs.com/package/validator'));

/******          ------------  Chalk     -------------     ******/
const chalk = require('chalk')
console.log(chalk.bgRed('Hi'));
console.log(chalk.bgYellow('Hi'));
console.log(chalk.bold.green('Success!!'));
