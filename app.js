var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({
    secret: 'root',
}))

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(request, response){
    if(request.session.counter == null){
        request.session.counter = 0;
    }
    else {
        request.session.counter += 1;
    }
    response.render("index", {counter : request.session.counter});
})

app.get("/addTwo", function(request, response){
    request.session.counter += 1;
    response.redirect("/");
})

app.listen(8080, function(){
    console.log("Listening on port: 8080");
})