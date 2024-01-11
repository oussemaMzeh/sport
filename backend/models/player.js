//import mongoose module
const mongoose = require("mongoose");
//create player schema
const playerSchema = mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    nbr: Number,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
});
//create Player Model 
const player = mongoose.model("Player", playerSchema);
//make user exportable
module.exports = player;