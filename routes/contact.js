var express = require('express');
var router = express.Router();
const contactCrontroller = require('../controllers/contact.js')
const sendMessageController = require('../controllers/sendMessage');
/* GET home page. */
router.get('/', contactCrontroller  );

router.post('/', sendMessageController);

module.exports = router;
