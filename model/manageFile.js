const mongoose = require("mongoose");
mongoose.pluralize(null);

const manageFile = new mongoose.Schema({
 
  
//   resultUrl: String,
  createdById: Number,
  createdByName:String,
  fileDoc: Object,
  createdDate: String,
});
module.exports = mongoose.model("manageFile", manageFile);
