const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL);

(async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await User.create({
    username: 'admin',
    password: hashedPassword,
    role: 'principal'
  });
  console.log('Admin user created');
  process.exit();
})();
