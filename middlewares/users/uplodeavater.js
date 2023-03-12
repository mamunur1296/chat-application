const uploader = require("../../utilities/singleuploader");

const avatarUpload = (req, res, next) => {
  const Upload = uploader(
    "avatars",
    ["image/jpeg", "image/png", "image/jpg"],
    1000000,
    "Only . jpeg , png , jpg  allowed"
  );
  Upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};
module.exports = avatarUpload;
