var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(200).json({status: 200, query: req.query, body:req.body, message:'Success'});
});

router.post('/', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(200).json({status: 200, query: req.query, body:req.body, message:'Success'});
});

module.exports = router;