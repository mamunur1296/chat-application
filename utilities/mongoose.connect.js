const mongoose = require("mongoose");
const dbConnection = () => {
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
};
module.exports = dbConnection;
