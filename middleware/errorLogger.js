const { logger } = require("./eventLogger.js");

const errorLogger = (err, req, res, next) => {
  logger(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    process.env.ERROR_LOG_FILENAME
  );
  console.log(err.stack);

  const status = res.statusCode ? res.statusCode : 500; //Server error

  res.status(status);
  res.json({ message: err.message });
};

module.exports = errorLogger;
