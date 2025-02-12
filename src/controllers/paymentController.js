// controllers/paymentController.js
const Razorpay = require('razorpay');
const crypto = require('crypto');
const Order = require('../models/Order');

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_6Akbw5MLpCe24o',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'tqqQfDFhh0KxI50JpEvaRt0k'
});

exports.initiatePayment = async (req, res) => {
  try {
    const { templateId, email, amount } = req.body;

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: {
        templateId,
        email
      }
    });

    // Create order in our database
    const order = new Order({
      templateId,
      email,
      amount,
      razorpayOrderId: razorpayOrder.id,
      status: 'pending',
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    });

    await order.save();

    res.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency
    });
  } catch (error) {
    console.error('Payment initiation failed:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Payment initiation failed'
    });
  }
};

exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      templateId,
      email
    } = req.body;

    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (razorpay_signature !== expectedSignature) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature"
      });
    }

    // Find and update order
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    // Verify payment with Razorpay
    const payment = await razorpay.payments.fetch(razorpay_payment_id);
    
    if (payment.status !== 'captured') {
      return res.status(400).json({
        success: false,
        message: "Payment not captured"
      });
    }

    // Update order status
    order.status = 'completed';
    order.paymentId = razorpay_payment_id;
    order.downloadUrl = generateDownloadUrl(templateId);
    await order.save();

    res.json({
      success: true,
      downloadUrl: order.downloadUrl
    });
  } catch (error) {
    console.error('Payment verification failed:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Payment verification failed'
    });
  }
};

exports.getPaymentStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    // If it's a Razorpay order, fetch the latest status
    if (order.razorpayOrderId) {
      const razorpayOrder = await razorpay.orders.fetch(order.razorpayOrderId);
      order.status = razorpayOrder.status === 'paid' ? 'completed' : order.status;
      await order.save();
    }

    const expired = order.expiresAt < new Date();
    
    res.json({
      success: true,
      expired,
      status: order.status
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

exports.cancelPayment = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    
    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    if (order.status !== 'pending') {
      return res.status(400).json({
        success: false,
        message: 'Can only cancel pending payments'
      });
    }

    // If it's a Razorpay order, attempt to cancel it
    if (order.razorpayOrderId) {
      try {
        await razorpay.orders.cancel(order.razorpayOrderId);
      } catch (error) {
        console.error('Razorpay order cancellation failed:', error);
        // Continue with local cancellation even if Razorpay cancellation fails
      }
    }

    order.status = 'cancelled';
    await order.save();

    res.json({
      success: true,
      message: 'Payment cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// Helper function to generate download URL
const generateDownloadUrl = (templateId) => {
  const token = crypto.randomBytes(32).toString('hex');
  return `${process.env.API_URL}/download/${templateId}?token=${token}`;
};