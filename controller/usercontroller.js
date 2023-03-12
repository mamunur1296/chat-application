const bcrypt = require("bcrypt");
const { Users } = require("../modeles/people ");

// get login page
const getuser = (req, res, next) => {
  res.render("users");
};

// add user
const addUsers = async (req, res, next) => {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new Users({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new Users({
      ...req.body,
      password: hashedPassword,
    });
  }
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "user was successfully",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "unknown error occured!",
        },
      },
    });
  }
};
module.exports = {
  getuser,
  addUsers,
};
