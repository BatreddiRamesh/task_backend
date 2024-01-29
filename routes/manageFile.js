var express = require("express");
var router = express.Router();
var fileUpload = require("../middleware/fileUpload");
var fileValidation = require("../middleware/fileValidation");
const {
    filePost,
    fileGet,
    fileDelete,
    fileDownload

} = require("../controller/manageFile");

router.post(
  "/post",
  fileUpload.single("fileDoc"),
  fileValidation.validateSize,
  // fileValidation.validatepdfType,
  filePost,
   
);

router.get("/get", fileGet);

router.get("/download/:id", fileDownload);

router.delete("/delete/:id", fileDelete);

module.exports = router;
