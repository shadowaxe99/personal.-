const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email address is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  subscriptionType: {
    type: String,
    required: [true, 'Subscription type is required'],
    enum: ['free', 'premium', 'lifetime'],
    default: 'free'
  },
  subscribedOn: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  },
  paymentDetails: {
    type: Map,
    of: String
  }
}, {
  timestamps: true
});

subscriptionSchema.methods.toggleActive = function() {
  this.isActive = !this.isActive;
  return this.save();
};

subscriptionSchema.statics.findActiveSubscriptions = function() {
  return this.find({ isActive: true });
};

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;