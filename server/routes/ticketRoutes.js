const express = require('express');
const router = express.Router();
const {
  getTickets,
  postTicket,
  putTicket,
  delTicket
} = require('../controllers/ticketController');

// routes for tickets root
router.route('/').get(getTickets).post(postTicket);

// routes for specific ticket
router.route('/:id').put(putTicket).delete(delTicket);

module.exports = router;
