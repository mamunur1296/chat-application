/**
 * Title: Chat Application
 * Description: This is my first chat application. I tried my best on this project.
 * Created by: Mamunur Rushid (Web App Developer)
 * Phone No: 01767988385
 * Date: 11 March 2023
 */
// External Imports
const express = require("express");
const router = express.Router();

// internal Imports
const { getuser } = require("../controller/usercontroller");
const titlehandler = require("../middlewares/common/titlehandler");

// login page
router.get("/users", titlehandler("users"), getuser);

// module export
module.exports = router;
