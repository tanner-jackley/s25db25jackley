var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var yacht_controller = require('../controllers/yacht');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// YACHT ROUTES ///
// POST request for creating a Yacht.
router.post('/yacht', yacht_controller.yacht_create_post);
// DELETE request to delete yacht.
router.delete('/yacht/:id', yacht_controller.yacht_delete);
// PUT request to update yacht.
router.put('/yacht/:id', yacht_controller.yacht_update_put);
// GET request for one yacht.
router.get('/yacht/:id', yacht_controller.yacht_detail);
// GET request for list of all yacht items.
router.get('/yacht', yacht_controller.yacht_list);
module.exports = router;