// get login page
const getlogin = (req, res, next) => {
  res.render("index", {
    title: "Login || chat-application",
  });
};

module.exports = {
  getlogin,
};
