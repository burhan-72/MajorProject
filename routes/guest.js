const express = require('express');
const router = express.Router();

const guestController = require('../controllers/guest-controller');

router.get('/home',guestController.home);

module.exports = router;