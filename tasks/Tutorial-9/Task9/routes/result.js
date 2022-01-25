var express = require('express');
var router = express.Router();

/* get the result of an operation */

router.get('/', function(req, res, next) {
  res.json( {
      value: eval (`${req.query.firstNumber} ${getOperationType(req.query.operation)} ${req.query.secondNumber}`),
  });
});

const getOperationType = (operation) => {
    if (operation === "add") {
        return "+";
    } else if (operation === "sub") {
        return "-";
    } else if (operation === "mul") {
        return "*";
    } else if (operation === "div") {
        return "/";
    } else {
        return "Unsupported type";
    }
}

module.exports = router;
