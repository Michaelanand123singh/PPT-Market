// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  templateId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'cancelled'],
    default: 'pending'
  },
  razorpayOrderId: {
    type: String,
    sparse: true
  },
  paymentId: {
    type: String,
    sparse: true
  },
  downloadUrl: String,
  expiresAt: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for faster lookups
orderSchema.index({ razorpayOrderId: 1 });
orderSchema.index({ email: 1 });
orderSchema.index({ status: 1 });

module.exports = mongoose.model('Order', orderSchema);