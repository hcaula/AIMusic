var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.js')();

/* GET users listing. */
router.get('/insert', function(req, res) {
  controller.insert(req, res);
});

router.get('/populate', function(req, res) {
  controller.populate(req, res);
});

router.get('/list', function(req, res) {
  controller.listMusic(req, res);
});

module.exports = router;
