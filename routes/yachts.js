var express = require('express');
const yacht_controllers= require('../controllers/yacht');
var router = express.Router();

/* GET yachts */
router.get('/', yacht_controllers.yacht_view_all_Page );
/* GET detail yacht page */
router.get('/detail', yacht_controllers.yacht_view_one_Page);

module.exports = router;