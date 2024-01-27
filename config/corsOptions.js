const whitelist = process.env.CORS_WHITELIST.split(" ");

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) === -1) {
      const msg = "Rejected by CORS. Origin not recognized.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;
