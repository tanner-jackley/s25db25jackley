var Yacht = require('../models/yacht');
// List of all Yachts
exports.yacht_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht list');
};
// for a specific Yacht.
exports.yacht_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.yacht_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Yacht();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"brand":"Sunseeker", "year_built":2000, "engine_power":1000}
    document.brand = req.body.brand;
    document.year_built = req.body.year_built;
    document.engine_power = req.body.engine_power;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Yacht delete from on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht delete DELETE ' + req.params.id);
};
// Handle Yacht update form on PUT.
exports.yacht_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht update PUT' + req.params.id);
};

// List of all Yachts
exports.yachts_list = async function(req, res) {
    try{
    theYachts = await Yacht.find();
    res.send(theYachts);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// VIEWS
// Handle a show all view
exports.yacht_view_all_Page = async function(req, res) {
    try{
    theYachts = await Yacht.find();
    res.render('yachts', { title: 'Yacht Search Results', results: theYachts });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }};