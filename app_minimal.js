var express = require("express");
var app = express();


/*
*=========GET=========
*/

// "/" => "Hi There!"
app.get("/", function(req, res){
    res.send("Hi there!");
});


// "/byb" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!!!");
});

// "/dog" => "Wang Wang Wang!!!"
app.get("/dog", function(req, res){
    res.send("Wang Wang Wang!!!");    
})


// Route parameters
app.get("/comments/:anything/:last", function(req, res){
    console.log(req.params);
    res.send("Welcome to the comments page.");
});


// "*" => "Route Undefined!!!"
app.get("*", function(req, res){
    res.send("Thanks for the GET request, but the route is not definded!!!");    
});


/*
*=========POST=========
*/

// "/" Post
app.post("/", function(req, res){
    res.send("Got a POST request");
    console.log("Client has a POST request at /");
});

//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});