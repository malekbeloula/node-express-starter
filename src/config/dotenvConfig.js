const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Export configuration
module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key',
  API_KEY: process.env.API_KEY || '',
};