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

// Handle Yacht delete from on DELETE.
exports.yacht_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Yacht delete DELETE ' + req.params.id);
};

// Handle Yacht update form on PUT.
exports.yacht_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Yacht.findById( req.params.id)

        // If the yacht is not found, return a 404 error
        if (!toUpdate) {
            res.status(404).send(`{"error": "Yacht with id ${req.params.id} not found"}`);
            return;
        }
        
        // Do updates of properties
        if(req.body.yacht_type)
        toUpdate.yacht_type = req.body.yacht_type;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        if(req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
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
    }};

