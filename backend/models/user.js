//import mongoose module
const mongoose = require("mongoose");
//create user schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    tel: Number,
    role: String,
    avatar:String
});
//create User Model
const user = mongoose.model("User", userSchema);
//make user exportable
module.exports = user;