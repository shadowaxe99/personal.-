const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  preferredDate: {
    type: Date,
    required: [true, 'Preferred date for consultation is required'],
  },
  preferredTime: {
    type: String,
    required: [true, 'Preferred time for consultation is required'],
  },
  serviceType: {
    type: String,
    required: [true, 'Type of service is required'],
    enum: ['Career Coaching', 'Business Consulting', 'Personal Branding', 'Other'],
  },
  message: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Consultation = mongoose.model('Consultation', consultationSchema);

module.exports = Consultation;