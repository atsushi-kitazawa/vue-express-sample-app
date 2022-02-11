const e = require('express');
var express = require('express');
var router = express.Router();
const db = require('../models')
db.sequelize.sync();
const Account = db.account

var fn1 = function (req, res, next) {
  Account.findAll().then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).send('Error: ' + err);
  });
  // next() 配列で指定した次の関数を実行してくれる
}

/* GET users listing. */
router.get('/', [fn1]);

router.get('/:userId', function (req, res, next) {
  Account.findByPk(req.params.userId).then(result => {
    if (result != null) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ msg: 'user not found' });
    }
  }).catch(err => {
    res.status(500).send('Error: ' + err);
  })
});

router.post('/', function (req, res, next) {
  Account.create({
    id: req.body.id,
    name: req.body.name
  }).then(result => {
    res.status(200).json({
      id: req.body.id,
      name: req.body.name
    });
  }).catch(err => {
    res.status(500).send('Error: ' + err);
  })
})

router.put('/:userId', function (req, res, next) {
  Account.update({
    name: req.body.name
  }, {
    where: {
      id: req.params.userId
    }
  }).then(result => {
    res.status(200).json({
      id: req.params.userId,
      name: req.body.name
    }).catch(err => {
      res.status(500).send('Error: ' + err);
    })
  })
})

router.delete('/:userId', function (req, res, next) {
  Account.destroy({
    where: {
      id: req.params.userId
    }
  }).then(result => {
    res.status(200).json({
      id: req.params.userId
    }).catch(err => {
      res.status(500).send('Error: ' + err);
    })
  })
})

module.exports = router;
