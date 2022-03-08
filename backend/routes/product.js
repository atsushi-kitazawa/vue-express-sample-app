var express = require('express');
var { connection } = require('../models');

var router = express.Router();

router.get('/', function (req, res) {
    var result = [];
    connection.query("select * from product", function (err, products) {
        if (err) throw err;
        res.json(products);
    })
})

router.post('/', function (req, res) {
    connection.query("insert into product values(?, ?)", [req.body.id, req.body.name], function (err, products) {
        if (err) throw err;
        res.json({ msg: 'success' });
    })
})

module.exports = router;