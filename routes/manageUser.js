var express = require("express");
var router = express.Router();

var {login,register} = require("../controller/manageUser");

router.post("/register", register);

// for the login page authentication
router.post("/login", login);

module.exports = router;
