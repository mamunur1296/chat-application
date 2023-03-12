const { check, validationResult } = require("express-validator");
const createError = require("http-errors");
const { unlink } = require("fs");

//internal impost
const { Users } = require("../../modeles/people ");
const path = require("path");

const uservalidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("invalid email address")
    .trim()
    .custom(async (email) => {
      try {
        const userEmail = await Users.findOne({ email: email });
        if (userEmail) {
          throw createError("Email already is used!");
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
  check("mobile")
    .isMobilePhone("bn-BD", {
      strictMode: true,
    })
    .withMessage("Mobile number must be a valid BD-Mobile number")
    .custom(async (mobile) => {
      try {
        const UserPhon = await Users.findOne({ mobile: mobile });
        if (UserPhon) {
          throw createError("This mobile Number already used ! ");
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Password mast be at least 8 characters long & must 1 lowercase , 1 Uppercase , 1 symbol"
    ),
  check("avatar"),
  check("role"),
];
//user Validator error handler
const addUserValidatorHandler = (req, res, next) => {
  const errors = validationResult(req).mapped();
  if (Object.keys(errors).length === 0) {
    next();
  } else {
    if (req.files.length > 0) {
      const { filename } = req.files[0];
      unlink(path.join(__dirname, `/../public/uploade/avatars/${filename}`)),
        (err) => {
          if (err) console.log(err);
        };
    }
  }
  //res the error
  res.status(500).json({
    error: errors,
  });
};
// exports items
module.exports = {
  uservalidator,
  addUserValidatorHandler,
};
