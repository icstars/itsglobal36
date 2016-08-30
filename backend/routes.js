'use strict'

var router = require('express').Router();
var database = require('./c36_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('menu.html');
  });
  
  router.get('/level', function(req,res){
    return res.render('level_select.html');
  });
  
  router.get('/combined', function(req,res){
    return res.render('combinedsteps.html');
  });
  
  router.get('/shop', function(req,res){
    return res.render('shopPage.html');
  });

  /* Your code here */

  return router
}();
