```javascript
const { check, validationResult } = require('express-validator');

// Validation rules for biography data
const biographyValidationRules = () => {
  return [
    check('name').notEmpty().withMessage('Name is required'),
    check('description').notEmpty().withMessage('Description is required'),
    check('timeline').isArray().withMessage('Timeline must be an array'),
    // Additional validation rules can be added as needed
  ];
};

// Validation rules for media appearances
const mediaValidationRules = () => {
  return [
    check('type').notEmpty().withMessage('Media type is required'),
    check('title').notEmpty().withMessage('Title is required'),
    check('date').notEmpty().withMessage('Date is required'),
    check('url').isURL().withMessage('Valid URL is required'),
    // Additional validation rules can be added as needed
  ];
};

// Validation rules for mentorship program data
const mentorshipValidationRules = () => {
  return [
    check('programName').notEmpty().withMessage('Program name is required'),
    check('description').notEmpty().withMessage('Program description is required'),
    check('benefits').notEmpty().withMessage('Benefits are required'),
    // Additional validation rules can be added as needed
  ];
};

// Validation rules for user registration
const userRegistrationValidationRules = () => {
  return [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // Additional validation rules can be added as needed
  ];
};

// Validation rules for user login
const userLoginValidationRules = () => {
  return [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').notEmpty().withMessage('Password is required'),
    // Additional validation rules can be added as needed
  ];
};

// General function to validate the request
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  biographyValidationRules,
  mediaValidationRules,
  mentorshipValidationRules,
  userRegistrationValidationRules,
  userLoginValidationRules,
  validate,
};
```