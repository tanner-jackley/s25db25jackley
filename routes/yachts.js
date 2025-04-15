var express = require('express');
const yacht_controllers= require('../controllers/yacht');
var router = express.Router();

/* GET yachts */
router.get('/', yacht_controllers.yacht_view_all_Page );
/* GET detail yacht page */
router.get('/detail', yacht_controllers.yacht_view_one_Page);
/* GET create yacht page */
router.get('/create', yacht_controllers.yacht_create_Page);
/* GET create update page */
router.get('/update', yacht_controllers.yacht_update_Page);
/* GET delete yacht page */
router.get('/delete', yacht_controllers.yacht_delete_Page);


module.exports = router;