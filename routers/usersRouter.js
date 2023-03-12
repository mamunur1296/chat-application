/**
 * Title: Chat Application
 * Description: This is my first chat application. I tried my best on this project.
 * Created by: Mamunur Rushid (Web App Developer)
 * Phone No: 01767988385
 * Date: 11 March 2023
 */
// External Imports
const express = require("express");

// internal Imports
const { getuser, addUsers } = require("../controller/usercontroller");
const titlehandler = require("../middlewares/common/titlehandler");
const avatarUpload = require("../middlewares/users/uplodeavater");
const {
  uservalidator,
  addUserValidatorHandler,
} = require("../middlewares/users/usersvalidator");
const router = express.Router();
// login page
router.get("/users", titlehandler("users"), getuser);
router.post(
  "/users",
  avatarUpload,
  uservalidator,
  addUserValidatorHandler,
  addUsers
);

// module export
module.exports = router;
