const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const path = require("path");
const fs = require("fs");

const logger = async (message, logFile) => {
  const dateTime = format(new Date(), "yyyy-MM-dd\tHH:mm:ss");
  const logRecord = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fs.promises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fs.promises.appendFile(
      path.join(__dirname, "..", "logs", logFile),
      logRecord
    );
  } catch (err) {
    console.log(err);
  }
};

const eventLogger = (req, res, next) => {
  const logMessage = `${req.method}\t${req.url}\t${req.headers.origin}`;
  logger(logMessage, process.env.EVENT_LOG_FILENAME);
  console.log(logMessage);
  next();
};

module.exports = { eventLogger, logger };
