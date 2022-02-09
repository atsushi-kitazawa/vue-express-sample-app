var express = require('express');
var router = express.Router();
const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:mysecretpassword@172.25.200.14:15432/express_db')

var fn1 = function (req, res, next) {
  sequelize.sync();
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
  sequelize.sync();
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
  sequelize.sync();
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

const Account = sequelize.define('account', {
  id: {
    type: DataTypes.INTEGER,
    field: 'id',
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    field: 'name'
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = router;
