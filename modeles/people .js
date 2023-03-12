//this is user schema just name people
const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", peopleSchema);

module.exports = {
  Users,
};
