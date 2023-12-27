```javascript
const mongoose = require('mongoose');

const ControversySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  date: {
    type: Date,
    required: [true, 'Date of the controversy is required']
  },
  resolution: {
    type: String,
    required: [true, 'Resolution details are required']
  },
  impact: {
    type: String,
    required: [true, 'Impact of the controversy is required']
  },
  links: [{
    type: String,
    validate: {
      validator: function(v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  }]
}, {
  timestamps: true
});

const Controversy = mongoose.model('Controversy', ControversySchema);

module.exports = Controversy;
```