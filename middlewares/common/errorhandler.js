const createError = require("http-errors");

// 404 not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "The requested content was not found."));
};

// Default error handler
const errorHandler = (err, req, res, next) => {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);
  if (res.locals.html) {
    // If response is HTML, render error page
    res.render("error", {
      title: "Error Page",
    });
  } else {
    // If response is JSON, return error object
    res.json(res.locals.error);
  }
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
