/**
 * Title: Chat Application
 * Description: This is my first chat application. I tried my best on this project.
 * Created by: Mamunur Rushid (Web App Developer)
 * Phone No: 01767988385
 * Date: 11 March 2023
 */

// External Imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

// Internal Imports
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorhandler");
const loginRouter = require("./routers/loginRouter");
const usersRouter = require("./routers/usersRouter");
const inboxRouter = require("./routers/inboxRouter");
// Create Express App
const app = express();

// Load Environment Variables
dotenv.config();

// Connect to Database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
  })
  .catch((err) => {
    console.log(`Error connecting to database: ${err}`);
  });

// Parse Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set View Engine
app.set("view engine", "ejs");

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// Routes Setup
app.use("/", loginRouter);
app.use("/", usersRouter);
app.use("/", inboxRouter);

// 404 Not Found Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

// Start the Server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
