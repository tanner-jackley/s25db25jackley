const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
brand: String,
year_built: Number,
engine_power: Number
})
module.exports = mongoose.model("Yacht",
yachtSchema)
