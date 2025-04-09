var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var yacht_controller = require('../controllers/yacht');

// Debugging: Log the yacht_controller to check if it's imported correctly
console.log("yacht_controller:", yacht_controller);

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// YACHT ROUTES ///
// POST request for creating a Yacht.
router.post('/yachts', yacht_controller.yacht_create_post);
// DELETE request to delete yacht.
router.delete('/yachts/:id', yacht_controller.yacht_delete);
// PUT request to update yacht.
router.put('/yachts/:id', yacht_controller.yacht_update_put);
// GET request for one yacht.
router.get('/yachts/:id', yacht_controller.yacht_detail);
// GET request for list of all yacht items.
router.get('/yachts', yacht_controller.yachts_list);

module.exports = router;