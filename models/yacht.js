const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
    brand: String,
    year_built: Number,
    engine_power: {
        type: Number,
        min: 100,
        max: 10000
    }
});
module.exports = mongoose.model("Yacht",
yachtSchema)
