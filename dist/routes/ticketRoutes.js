"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/ticketController"),
  getTickets = _require.getTickets,
  getTicket = _require.getTicket,
  createTicket = _require.createTicket,
  updateTicket = _require.updateTicket,
  deleteTicket = _require.deleteTicket;
var _require2 = require("../middleware/authMiddleware"),
  protect = _require2.protect;
router.route('/').get(protect, getTickets).post(protect, createTicket);
router.route('/:id').get(protect, getTicket)["delete"](protect, deleteTicket).put(protect, updateTicket);
module.exports = router;