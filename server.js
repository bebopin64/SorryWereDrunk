var express = require("express");
var app = express();
var PORT = process.env.PORT || 1337;
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//Passport
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

//Handlebars
app.set('views', './app/views');
app.engine('hbs', exphbs({
  extname:'.hbs'
}));
app.set('view engine', '.hbs');



app.get('/', function(req, res) {
  res.send('Welcome to Passport with Sequelize');
});


//Cookie Parser Test
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static("./public"));

// var Articles = require("./models/articles.js");
// var mongoose = require("mongoose");
// var uri = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
// mongoose.connect(uri);

// var db = mongoose.connection;

var models = require('./app/models');
var authRoute = require('./app/routes/auth.js')(app, passport);

require('./app/config/passport/passport.js')(passport, models.user);

models.sequelize.sync().then(function() {
  console.log('Database looks good capt');
}).catch(function(err) {
  console.log(err, " We're taking on water capt!");
})


// db.on('error', function (err) {
//    console.log('Mongoose Error: ', err);
// });

// db.once('open', function () {
//    console.log('Mongoose connection successful.');
// });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
