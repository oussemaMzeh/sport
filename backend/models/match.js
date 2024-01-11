//import mongoose module
const mongoose = require("mongoose");
//create user schema
const matchSchema = mongoose.Schema({
    teamOne: String,
    teamTwo: String,
    scoreOne: Number,
    scoreTwo: Number,

});
//create Match Model
const match = mongoose.model("Match", matchSchema);
//make user exportable
module.exports = match;