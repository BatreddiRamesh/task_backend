const mongoose = require("mongoose");
mongoose.pluralize(null);

const manageUser = new mongoose.Schema({

  email:String,
  password: String,
});
module.exports = mongoose.model("manageUser", manageUser);
