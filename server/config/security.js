```javascript
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const xssClean = require('xss-clean');

/**
 * Security configuration for the Express application.
 * This module sets up various HTTP headers and middleware to enhance security.
 */

const securityConfig = (app) => {
  // Set security-related HTTP headers
  app.use(helmet());

  // Enable CORS with various options
  app.use(cors({
    origin: '*', // Configure this based on your requirements
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  // Rate limiting to prevent brute-force attacks
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after a break'
  });
  app.use('/api/', limiter);

  // Protect against HTTP Parameter Pollution attacks
  app.use(hpp());

  // Data sanitization against XSS
  app.use(xssClean());

  // Additional security configurations can be added here
};

module.exports = securityConfig;
```