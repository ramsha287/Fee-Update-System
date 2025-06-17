const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['principal', 'student'], default: 'principal' }
});

module.exports = mongoose.model('User', userSchema);
