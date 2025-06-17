const express = require('express');
const router = express.Router();
const { updateFeeDetails, getStudents } = require('../controllers/principalController');

const auth = require('../middleware/auth');
router.get('/students',auth, getStudents);
router.post('/update-fee/:id',auth, updateFeeDetails);


module.exports = router;
