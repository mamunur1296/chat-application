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
const { getInbox } = require("../controller/inboxcontroller");
const titlehandler = require("../middlewares/common/titlehandler");

// login page
router.get("/inbox", titlehandler("inbox"), getInbox);

// module export
module.exports = router;
