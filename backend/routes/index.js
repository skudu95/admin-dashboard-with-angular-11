var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //  changed from render to send and title cleaned
  res.send({ title: 'Express' });
});

module.exports = router;
