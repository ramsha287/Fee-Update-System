// seed.js
const mongoose = require('mongoose');
const Student = require('./models/Student');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('MongoDB connected');
  return Student.create({
    name: 'Ramsha',
    email: 'ramsha@example.com',
    totalFee: 12000,
    dueAmount: 3000,
    dueDate: '2025-06-30',
    feeConfirmed: false
  });
})
.then(() => {
  console.log('Sample student added');
  process.exit();
})
.catch(err => console.error(err));
