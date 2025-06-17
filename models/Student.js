const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  totalFee: Number,
  dueAmount: Number,
  dueDate: String,
  feeConfirmed: Boolean
});
module.exports = mongoose.model('Student', studentSchema);
