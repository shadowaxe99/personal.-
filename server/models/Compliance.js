```javascript
const mongoose = require('mongoose');

const complianceSchema = new mongoose.Schema({
  gdprConsent: {
    type: Boolean,
    required: true
  },
  privacyPolicyAccepted: {
    type: Boolean,
    required: true
  },
  termsOfServiceAccepted: {
    type: Boolean,
    required: true
  },
  cookiePolicyAccepted: {
    type: Boolean,
    required: true
  },
  dataProtectionOfficer: {
    name: {
      type: String,
      required: true
    },
    contactEmail: {
      type: String,
      required: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Pre-save hook to ensure compliance with GDPR and other legal requirements
complianceSchema.pre('save', function(next) {
  if (!this.gdprConsent || !this.privacyPolicyAccepted || !this.termsOfServiceAccepted || !this.cookiePolicyAccepted) {
    const err = new Error('All compliance fields must be accepted');
    next(err);
  } else {
    next();
  }
});

const Compliance = mongoose.model('Compliance', complianceSchema);

module.exports = Compliance;
```