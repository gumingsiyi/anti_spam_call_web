var express = require('express');
var router = express.Router();

//let server_host = '10.70.156.105:8080';
let server_host = 'localhost:8080';

router.get('/', function (req, res) {
  res.render('index', { server: 'Express' });
});
router.get('/users', function (req, res) {
  res.render('error', { message:'hello', error:{status: '1', stack: '2'} });
});
router.get('/login', function (req, res) {
  res.render('admin/login', { server_host: server_host });
});
router.get('/success', function (req, res) {
  res.render('admin/success', { server_host: server_host});
});
router.get('/base_config' ,function(req, res) {
  res.render('admin/baseModelConfig', { server_host: server_host })
})
router.get('/details', function(req, res) {
  res.render('admin/details', { server_host: server_host })
})

module.exports = router;