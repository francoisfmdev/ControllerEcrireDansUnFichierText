var express = require('express');
var router = express.Router();
const indexCrontroller =require('../controllers/index.js')

/* GET home page. */
router.get('/', indexCrontroller  );

module.exports = router;
