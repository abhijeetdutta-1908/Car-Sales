const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');
require('dotenv').config();
const db = require('./db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
  