var Yacht = require('../models/yacht');
// List of all Yachts
exports.yachts_list = async function(req, res) {
    try{
        let theYachts = await Yacht.find();
        res.send(theYachts);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
   };

// for a specific Yacht.
exports.yacht_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try {
        let result = await Yacht.findById(req.params.id);
        res.send(result);
    } catch (error) {
        res.status(500);
        res.send(`{"error": "document for id ${req.params.id} not found"}`);
    }
};

// Handle Yacht create on POST.
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

// Handle Yacht delete on DELETE.
exports.yacht_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Yacht.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
    

// Handle Yacht update form on PUT.
exports.yacht_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await Yacht.findById(req.params.id);

        // If the yacht is not found, return a 404 error
        if (!toUpdate) {
            res.status(404).send(`{"error": "Yacht with id ${req.params.id} not found"}`);
            return;
        }

        // Update the properties if they are defined in the request body
        if (req.body.brand) toUpdate.brand = req.body.brand;
        if (req.body.year_built) toUpdate.year_built = req.body.year_built;
        if (req.body.engine_power) toUpdate.engine_power = req.body.engine_power;

        // Save the updated yacht
        let result = await toUpdate.save();
        console.log("Update successful:", result);
        res.send(result);
    } catch (err) {
                res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
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
    }
};
// Handle a show one view with id specified by query
exports.yacht_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Yacht.findById( req.query.id)
        res.render('yachtdetail',
            { title: 'Yacht Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a yacht.
// No body, no in path parameter, no query.
// Does not need to be async
exports.yacht_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('yachtcreate', { title: 'Yacht Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a yacht.
// query provides the id
exports.yacht_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Yacht.findById(req.query.id)
        res.render('yachtupdate', { title: 'Yacht Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.yacht_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Yacht.findById(req.query.id)
        res.render('yachtdelete', { title: 'Yacht Delete', toShow:
        result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};