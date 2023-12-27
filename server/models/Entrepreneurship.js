```javascript
const mongoose = require('mongoose');

const entrepreneurshipSchema = new mongoose.Schema({
  dropShippingBusiness: {
    startedAtAge: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  creatorEdgeMedia: {
    founded: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      required: true
    }
  },
  sportsManagement: {
    collaborationWithNBPA: Boolean,
    collaborationWithFIBA: Boolean,
    description: String
  },
  cryptocurrencyAndFrax: {
    earlyInvestmentInBitcoin: Boolean,
    coFoundedFrax: Boolean,
    description: String
  },
  talentXEntertainment: {
    coFoundedTalentX: {
      type: Boolean,
      default: true
    },
    roleInDigitalCreatorEconomy: String,
    globalRepresentation: Boolean,
    description: String
  },
  networkingAndMentorship: {
    networkingProwess: String,
    mentorshipAndAdvice: String,
    description: String
  },
  controversiesAndPersistence: {
    facedControversies: Boolean,
    continuedBusinessFocus: Boolean,
    description: String
  }
}, {
  timestamps: true
});

const Entrepreneurship = mongoose.model('Entrepreneurship', entrepreneurshipSchema);

module.exports = Entrepreneurship;
```