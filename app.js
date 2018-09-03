var express = require("express");
var app = express();

var catMe = require('cat-me');
var kk = require('knock-knock-jokes')

//console.log(catMe());
//console.log(kk());


/*
*=========GET=========
*/

// "/" => "Hi There!" + cat + kkjoke
app.get("/", function(req, res){
    var promptText = "Hi there! Welcome to my page. Hope you like my cat and joke! \n\n";
    console.log(promptText + catMe() + "\n\n" + kk());
    res.send(promptText + catMe() + "\n\n" + kk());
});


// Route parameters, repeat message
app.get("/repeat/:message/:number", function(req, res){
    var message = req.params.message;
    var number = req.params.number;
    var result = "";
    
    for(var i = 0; i < number; i++){
        result = result + message + " ";
    }
    res.send(result);
});


// Route parameters, animal speak
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    var sound = "";
    
    if(animal === "pig")
        sound = "oink";
    else if(animal === "dog")
        sound = "wang wang wang";
    else if(animal === "cow")
        sound = "moo";
    
    res.send("The " + animal + " says " + sound);
});


//Tell express to listen for requests
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});