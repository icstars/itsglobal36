'use strict'

var router = require('express').Router();
var database = require('./c36_modules/database');

module.exports = function() {

  router.get('/', function(req,res){
    return res.render('gameTest.html');
  });

  /* Your code here */

  return router
}();
