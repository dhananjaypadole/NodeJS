## Lesson 1: Section Intro
The best way to get started with Node.js is to explore its `module system`.  

The module system lets you `load external libraries` into your application.  
That’ll enable you to take advantage of `built-in Node.js modules as well as third-party npm modules`.   
This includes libraries for `connecting to database, creating web servers,` and more!


**We have different Modules as below**
- file system module 
- http module 
- url module  and etc
  
can use below doc link 
https://nodejs.org/dist/latest-v18.x/docs/api/

for selecting and modules and systax from the same 

version of node can select as per requirement 

**require() and exports**  
using require() you can call other module and but you cannot use variable which is declared in that file to get the access to the variable you have to exports that file.

using require() call and print statement in that file and using exports u can get access also to the variables.


## lession 2
perfomed some simple exercise like excess methd from other file and import export data etc.

## lession 3 
in this lession we imported npm modules/package  eg validator,chalk and used its inbuild methods like isEmail etc

**NPM Modules**
remember if you want to use node module it is imp that packckage.json should be present and to get package.json you have to give npm init commad 


**-g and locally difference**
when we only give `npm i .....` this module will get added in _package.json_ under _dependancy_ section and   
when you give  `npm i .....-g` that time it will not add in package.json 

**whento use -g and when not**
in some case we want some module for local only for eg 
`modemon` which is used for hot-reloading but that is not required in higher environment and we dont want to push that but want to use that in local only so use `-g` while installing 

**NODEMON**
if you dont want to run file again and again for each small change that time you can use nodemon.
what nodemon do is if you save file it run automatically. 
only onec you have to run file like below
`nodemon fileName`

if you installed nodemon globally and you are not sure weather its install properluy or not you can run command
`nodemon -v`

**chalk**
 is used design test in console or give color to that 