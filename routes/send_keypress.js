var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', function(req, res, next) {

          console.log(req.body.button_press);
          res.sendStatus(200);
          // switch(req.body.button_press)
          // 	case 1:
          // 		console.log("a");
          // 		break;
          // 	case 2:
          // 		console.log("b");
          // 		break;
          // 	case 3:
          // 		console.log("c");
          // 		break;
          // 	default:
          // 		console.log("This button has not yet been defined");


});

module.exports = router;
