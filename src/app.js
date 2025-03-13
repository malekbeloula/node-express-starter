const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();

// Security, Performance, Logging
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(rateLimiter);

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Error Handling Middleware
app.use(require('./middleware/errorHandler'));

module.exports = app;
