// server/config/constants.js

/**
 * This file contains the constants used throughout the server-side of the application.
 * It includes configuration for database connections, API endpoints, and other
 * shared resources that require a centralized point of reference.
 */

// Database constants
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/michaelgruen';
const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// API constants
const API_PREFIX = '/api';

// Security constants
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const SALT_ROUNDS = 10;

// Compliance constants
const GDPR_COMPLIANCE_ENABLED = true;

// Analytics constants
const GOOGLE_ANALYTICS_TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'UA-XXXXX-Y';

// SEO constants
const SEO_DEFAULT_TITLE = 'Michael Gruen - Entrepreneur, Mentor, and Influencer';
const SEO_DEFAULT_DESCRIPTION = 'Discover the multifaceted career of Michael Gruen, from entrepreneurship to mentorship and beyond.';

// Email marketing constants
const EMAIL_MARKETING_FROM_ADDRESS = 'newsletter@michaelgruen.com';
const EMAIL_MARKETING_SIGNUP_CONFIRMATION_SUBJECT = 'Welcome to Michael Gruen’s Newsletter!';

// Hosting and deployment constants
const CLOUD_PROVIDER = 'AWS'; // AWS, Azure, or Google Cloud

// Exporting constants
module.exports = {
  DB_CONNECTION_STRING,
  DB_OPTIONS,
  API_PREFIX,
  JWT_SECRET,
  SALT_ROUNDS,
  GDPR_COMPLIANCE_ENABLED,
  GOOGLE_ANALYTICS_TRACKING_ID,
  SEO_DEFAULT_TITLE,
  SEO_DEFAULT_DESCRIPTION,
  EMAIL_MARKETING_FROM_ADDRESS,
  EMAIL_MARKETING_SIGNUP_CONFIRMATION_SUBJECT,
  CLOUD_PROVIDER,
};