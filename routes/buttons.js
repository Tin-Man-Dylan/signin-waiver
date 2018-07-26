var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
	
  console.log('before file')
  res.sendFile(__dirname+'/networks.json');

});

module.exports = router;
