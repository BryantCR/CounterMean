let express = require("express");
let session = require('express-session');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({secret: 'codingDojo'}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(!req.session['counter']){
        req.session['counter'] = 1;
    } 
    else{
        req.session['counter'] +=1;
    }
    res.render("index", {'counter' : req.session.counter});
})

app.get('/add2', function(req, res) {
    if(!req.session['counter']){
        req.session['counter'] = 1;
    } 
    else{
        req.session['counter'] +=1;
    }
        res.redirect('/');
})

app.get('/reset', function(req, res) {
        req.session['counter'] = 0;
    res.redirect('/');
})




// tell the express app to listen on port 8000
app.listen(8080, function() {
 console.log("listening on port 8080");
});