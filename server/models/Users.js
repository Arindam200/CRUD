const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,

});
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;