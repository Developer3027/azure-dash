const asyncHandler = require('express-async-handler');
const Ticket = require('../model/ticketModel');

// @desc    Get all Tickets
// @route   Get /api/tickets
// @access  public
const getTickets = asyncHandler(async (req, res) => {
  const ticket = await Ticket.find();
  res.status(200).json(ticket);
});

// @desc    Create a Ticket
// @route   Post /api/tickets
// @access  private
const postTicket = asyncHandler(async (req, res) => {
  const { id, city, state, phone, ticketDate, customerId, service, servicePrice, addOn, addOnPrice, coupon, preferred } = req.body;
  
  const ticketExists = await Ticket.findOne({ id });

  if (ticketExists) {
    res.status(400);
    throw new Error('Ticket already exists');
  }

  const total =
    Number(servicePrice) +
    Number(addOnPrice) -
    Number(coupon);

  const ticket = await Ticket.create({
    id,
    city,
    state,
    phone,
    ticketDate,
    customerId,
    service,
    servicePrice,
    addOn,
    addOnPrice,
    totalPrice: Number(total).toFixed(2),
    coupon,
    preferred
  });

  if (ticket) {
    res.status(200).json({
      _id: ticket._id,
      ticket: ticket.id,
      city: ticket.city,
      customerId: ticket.customerId,
      totalPrice: total
    })
  } else {
    res.status(400);
    throw new Error('Invalid ticket info');
  }
});

// @desc    Update a Ticket
// @route   put /api/tickets/:id
// @access  private
const putTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update the ${req.params.id} Ticket` });
});

// @desc    Delete a Ticket
// @route   delete /api/tickets/:id
// @access  private
const delTicket = asyncHandler(async (req, res) => {
  
  res.status(200).json({ message: `Delete the ${req.params.id} Ticket` });
});

module.exports = { getTickets, postTicket, putTicket, delTicket };
