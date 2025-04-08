var Yacht = require('../models/yacht');
// List of all Yachts
exports.yacht_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht list');
};
// for a specific Yacht.
exports.yacht_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht detail: ' + req.params.id);
};
// Handle Yacht create on POST.
exports.yacht_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht create POST');
};
// Handle Yacht delete from on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht delete DELETE ' + req.params.id);
};
// Handle Yacht update form on PUT.
exports.yacht_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht update PUT' + req.params.id);
};