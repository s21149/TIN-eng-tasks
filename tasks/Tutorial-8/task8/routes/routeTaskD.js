var express = require('express');
var router = express.Router();


router.post("/", function(req, res, next) {
  res.render('taskD', {jsonInputObject: JSON.stringify(req.body)});
});

module.exports = router;
