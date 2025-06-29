const { stack } = require("../routes/contactRoutes");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
  res.json({
    title: "Validation Failed",
    message: err.message,
    stackTrace: err.stack,
  });
};

module.exports = errorHandler;
