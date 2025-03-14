const logger = require('./logger');

module.exports = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).json({ error: 'Internal Server Error' });
};
