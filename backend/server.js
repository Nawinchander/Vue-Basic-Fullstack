const express = require('express');
const cors = require('cors');
const connectMongo = require('./config/mongo');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
require('./config/mysql');

const app = express();
connectMongo();


app.use(cors());
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));

