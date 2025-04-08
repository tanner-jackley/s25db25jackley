const mongoose = require("mongoose")
const yachtSchema = mongoose.Schema({
yacht_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Yacht",
yachtSchema)
