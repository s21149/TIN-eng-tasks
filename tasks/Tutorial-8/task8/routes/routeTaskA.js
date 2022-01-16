var express = require('express');
var router = express.Router();

// Get page for task_a
router.get("/hello", function(req, res, next) {
  res.send("Hello, world!");
});

module.exports = router;
