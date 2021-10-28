var express = require('express');
var router = express.Router();

//let server_host = '10.70.156.105:8080';
let server_host = 'localhost:8080';

//登录页面
router.get('/login', function (req, res) {
  res.render('admin/login', { server_host: server_host });
});

//后台控制模拟拨打等操作页面
router.get('/success', function (req, res) {
  res.render('admin/success', { server_host: server_host});
});

//基础模型设置页面
router.get('/base_config' ,function(req, res) {
  res.render('admin/baseModelConfig', { server_host: server_host })
})

//详细信息查看页面
router.get('/details', function(req, res) {
  res.render('admin/details', { server_host: server_host })
})

module.exports = router;