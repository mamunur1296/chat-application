// get login page
const getuser = (req, res, next) => {
  res.render("users");
};

module.exports = {
  getuser,
};
