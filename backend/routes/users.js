const e = require('express');
var express = require('express');
const model = require('../models');
const controller = require('../controllers/user_controller.js');

var router = express.Router();
model.db.sequelize.sync();

router.get('/', controller.findAll);
router.get('/:userId', controller.findByPk);
router.post('/', controller.create)
router.put('/:userId', controller.update)
router.delete('/:userId', controller.destroy)

module.exports = router;
