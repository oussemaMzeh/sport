//import mongoose module
const mongoose = require("mongoose");
//create team schema
const teamSchema = mongoose.Schema({
    teamName: String,
    foundation: Number,
    owner: String,
    players: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
        }
    ]
});
//create team Model
const team = mongoose.model("Team", teamSchema);
//make user exportable
module.exports = team;