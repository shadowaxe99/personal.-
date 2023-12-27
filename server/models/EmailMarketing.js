```javascript
const mongoose = require('mongoose');

const emailMarketingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  subscriptionDate: {
    type: Date,
    default: Date.now
  },
  preferences: {
    type: Map,
    of: String
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Middleware to handle email subscription logic
emailMarketingSchema.pre('save', async function(next) {
  // Logic to handle new subscriptions or updates to preferences
  // This could involve sending a confirmation email, updating mailing lists, etc.
  next();
});

const EmailMarketing = mongoose.model('EmailMarketing', emailMarketingSchema);

module.exports = EmailMarketing;
```