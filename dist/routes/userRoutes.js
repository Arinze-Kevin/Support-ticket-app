"use strict";

var express = require('express');
var router = express.Router();
var _require = require("../controllers/userController"),
  registerUser = _require.registerUser,
  loginUser = _require.loginUser,
  getMe = _require.getMe;
var _require2 = require("../middleware/authMiddleware"),
  protect = _require2.protect;
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);
module.exports = router;