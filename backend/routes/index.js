var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  res.render('index', { title: 'Request Method is POST' })
});

router.put('/', function (req, res, next) {
  res.render('index', { title: 'Request Method is PUT' })
});

router.delete('/', function (req, res, next) {
  res.render('index', { title: 'Request Method is DELETE' })
});

module.exports = router;
