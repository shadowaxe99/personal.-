```javascript
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { ValidationError } = require('express-validation');

// Middleware to set security headers using Helmet
const setSecurityHeaders = (req, res, next) => {
  helmet()(req, res, next);
};

// Middleware to enable CORS
const enableCORS = (req, res, next) => {
  cors()(req, res, next);
};

// Middleware to handle validation errors
const handleValidationErrors = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return next(err);
};

// Middleware to handle not found errors
const notFoundHandler = (req, res, next) => {
  res.status(404).send({ message: 'Resource not found' });
};

// Middleware to handle general errors
const generalErrorHandler = (err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected error occurred';
  res.status(statusCode).send({ message });
};

module.exports = {
  setSecurityHeaders,
  enableCORS,
  handleValidationErrors,
  notFoundHandler,
  generalErrorHandler
};
```