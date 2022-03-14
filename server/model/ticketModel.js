const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
  id: {
    type: String,
    required: [true, "Tracking ID"]
  },
  city: {
    type: String,
    required: [true, "Must have a location"]
  },
  state: {
    type: String,
    required: [true, "Must have a location"]
  },
  phone: {
    type: Number
  },
  ticketDate: {
    type: String,
    required: [true, "Must have a date"]
  },
  customerId: {
    type: String,
    required: [true, "Customer must have a ID"]
  },
  service: {
    type: String,
    required: [true, "What service was paid for"]
  },
  servicePrice: {
    type: String,
    required: [true, "What is the service price"]
  },
  addOn: {
    type: String
  },
  addOnPrice: {
    type: String
  },
  coupon: {
    type: String
  },
  totalPrice: {
    type: String
  },
  preferred: {
    type: Boolean,
    required: [true, "Does the customer hold an account?"]
  }
}, { timestamps: true });

module.exports = mongoose.model("Ticket", ticketSchema);
