const express = require('express');
const router = express.Router();
const { confirmFee } = require('../controllers/studentController');

router.get('/confirm', confirmFee);

module.exports = router;