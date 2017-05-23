var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.js')

/* GET users listing. */
router.get('/hello', function(req, res, next) {
  controller().helloWorld();
});

module.exports = router;
