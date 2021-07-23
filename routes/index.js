var express = require('express');
var router = express.Router();

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
  app.get('/users', function (req, res) {
    res.render('error', { message:'hello', error:{status: '1', stack: '2'} });
  });
  app.get('/login', function (req, res) {
    res.render('adminlogin');
  });
  app.get('/success', function (req, res) {
    res.render('success');
  });
};
