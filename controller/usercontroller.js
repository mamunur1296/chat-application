// get login page
const getuser = (req, res, next) => {
  res.render("users", {
    title: "users || chat-application",
  });
};

module.exports = {
  getuser,
};
