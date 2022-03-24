//import express from "express";
var express = require("express");
var path = require("path");
//import routes from "routes";
var routes = require("./routes");

var app = express();

app.set("port",process.env.port || 3000);

app.set("view engine","ejs");
var viewPath = path.join(__dirname, 'views');

app.set('views', viewPath);
app.use(express.static('public'));

app.use(routes);

app.listen(app.get("port"),function(){
    console.log("Server started on port" + app.get("port"));
});

