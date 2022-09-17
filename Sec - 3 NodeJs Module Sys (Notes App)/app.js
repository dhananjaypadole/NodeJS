// const fs = require('fs') //1) 
// require('./utils')  // 2) 
// let firstname = require('./utils') //3)
// let addition = require('./utils') // 4) 
const getString = require('./notes') // 5)

// fs.writeFileSync('file.txt','This text is from nodejs');

/******* 1) Challenge: Append a message to note.txt ******/
// fs.appendFileSync('file.txt','. this is appended text')

/******       2) read other file in same file / messags from both file   ******/
// console.log("after require('./utils')") 

/******     3) module.exports      ******/
// console.log(firstname);

/******       4) export the function   ******/
// const sum = addition(2,3)
// console.log(sum);

/******       5) Challenge: Define and use function from new file    ******/
console.log(getString);    // will return complete func
console.log(getString());  // will return answer of function
