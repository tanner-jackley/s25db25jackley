const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
    brand: String,
    year_built: {
        type: Number,
        required: true, 
        min: 1900,      
        max: new Date().getFullYear() 
    },
    engine_power: {
        type: Number,
        min: 100,
        max: 10000
    }
});
module.exports = mongoose.model("Yacht",
yachtSchema)
