//code the server here, with express remember.
//for now imma have fun with node.js as the runtime and express as the framework.
//printing hello world server

//npm install express. --save, --saveDev...
// for running a simple node application.

var express = require("express");
//creating a server
var server = express();
var port = process.env.port || 3000;
server.get("/", function(req, res){
    res.send("Hello World!");
});

server.listen(port, function(){
    console.log("The server is listening on port" + " " + port);
});