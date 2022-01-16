var express = require('express');
var router = express.Router();

// Get page for task_b
router.get("/", function(req, res, next) {
  res.render('form');
});

module.exports = router;
