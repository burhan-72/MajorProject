const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home-controller');
// const guestController = require('../controllers/guest-controller');


console.log('Router loaded!!');

router.get('/',homeController.home);

router.use('/users',require('./users'));
router.use('/guest',require('./guest'));

module.exports = router;