var express = require('express');
var router = express.Router();

let server_host = '10.70.156.105:8080';
//let server_host = 'localhost:8080';

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { server: 'Express' });
  });
  app.get('/users', function (req, res) {
    res.render('error', { message:'hello', error:{status: '1', stack: '2'} });
  });
  app.get('/login', function (req, res) {
    res.render('adminlogin', { server_host: server_host });
  });
  app.get('/success', function (req, res) {
    res.render('success', { server_host: server_host});
  });
  app.get('/base_config' ,function(req, res) {
    res.render('baseModelConfig', { server_host: server_host })
  })
  app.get('/details', function(req, res) {
    res.render('details', { server_host: server_host })
  })
};
