const express = require("express");
const app = express();
const path = require("path");

var index = require('./routes/index');
var routeTaskA = require('./routes/routeTaskA');
var routeTaskBForm = require('./routes/routeTaskBForm');
var routeTaskBFormData = require('./routes/routeTaskBFormData');
var routeTaskD = require('./routes/routeTaskD');

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//homeScreen
app.use('/', index);

// a) 
app.use("/hello", routeTaskA);

// b) and C)
app.use("/form", routeTaskBForm);
app.use("/formData", routeTaskBFormData);

// d)
app.use('/jsondata', routeTaskD);
// GET or POST wasn't specified, so i decided to use GET. 
// I checked if the program worked using "Postman", it works for both GET and POST.

// listening
app.listen(3000);