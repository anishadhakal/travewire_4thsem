//import express from 'express';
var express = require("express");
var router = express.Router();

router.get("/", function(req,res){
    console.log("Helllo , I'm on basic log here ");
    res.render("index");
   // res.render("login");
});

module.exports = router;