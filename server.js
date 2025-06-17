const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const principalRoutes = require('./routes/principalRoutes');
const path = require('path');
const app = express();
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/principal', principalRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));