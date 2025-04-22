var express = require('express');
const yacht_controllers = require('../controllers/yacht');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.redirect("/login");
};

/* GET yachts */
router.get('/', yacht_controllers.yacht_view_all_Page);
/* GET detail yacht page */
router.get('/detail', yacht_controllers.yacht_view_one_Page);
/* GET create yacht page */
router.get('/create', secured, yacht_controllers.yacht_create_Page);
/* GET create update page */
router.get('/update', secured, yacht_controllers.yacht_update_Page);
/* GET delete yacht page */
router.get('/delete', secured, yacht_controllers.yacht_delete_Page);

module.exports = router;