`Nodejs :`  
NOdeJs is JavaScript runtime, build on chrome's V8 Js engine.

`Why NodeJS`  
NOdeJS uses an `event-driven , non-blocking I/O` model that makes it lightweight and efficient.  
Nodejs's package ecosystem, `npm` is the largest ecosystem of open source libraryin the world.

`Non-Blocking I/O`  
Non-blocking I/O operations `allow a single process to serve multiple requests at the same time`.   
Instead of the process being blocked and waiting for I/O operations to complete,

 Explanantion:
NodeJs communicate with file system or server so ther e is a IO operation performed that is we send request and wait for response and till that time our other operation get blocked 

so in non-blocking means here we will not wait for resposne we will start execution next operation that makes nodejs fast and not freze it.

`event-driven :`  
event-driven is process of just registering the callbacks and having them call when i/o operation is done.