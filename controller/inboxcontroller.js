// get login page
const getInbox = (req, res, next) => {
  res.render("inbox", {
    title: "inbox || chat-application",
  });
};

module.exports = {
  getInbox,
};
