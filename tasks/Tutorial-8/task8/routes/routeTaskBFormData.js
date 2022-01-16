var express = require('express');
var router = express.Router();

// Get page for task_b
router.post("/", function(req, res, next) {
  res.render('formData', {formInput: JSON.stringify(req.body)});
});

module.exports = router;
