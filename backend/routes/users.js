var express = require('express');
var router = express.Router();

var userList = [{
  id: "1",
  name: "foo"
},
{
  id: "2",
  name: "bar"
}]

var fn1 = function(req, res, next) {
  if(req.params.userId == 1) {
    res.json(userList[0]);
  } else if(req.params.userId == 2) {
    res.json(userList[1]);
  } else {
    res.send('user not found ' + req.params.userId)
  }
  // next() 配列で指定した次の関数を実行してくれる
}

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(userList);
});

router.get('/:userId', [fn1]);

module.exports = router;
