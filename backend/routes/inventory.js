const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');
const authorizeRoles = require('../middleware/role');

// Get all cars
router.get('/', auth, async (req, res) => {
  try {
    const [cars] = await db.query('SELECT * FROM cars');
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new car (only admin or dealer allowed)
router.post('/', auth, authorizeRoles('admin', 'dealer'), async (req, res) => {
  const { vin, model, status, options } = req.body;
  try {
    await db.query('INSERT INTO cars (vin, model, status, options) VALUES (?, ?, ?, ?)', 
    [vin, model, status, options]);
    res.status(201).json({ message: 'Car added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single car by ID
router.get('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    const [cars] = await db.query('SELECT * FROM cars WHERE id = ?', [id]);
    if (cars.length === 0) return res.status(404).json({ error: 'Car not found' });
    res.json(cars[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a car by ID (only admin or dealer allowed)
router.put('/:id', auth, authorizeRoles('admin', 'dealer'), async (req, res) => {
  const { id } = req.params;
  const { vin, model, status, options } = req.body;
  try {
    await db.query(
      'UPDATE cars SET vin = ?, model = ?, status = ?, options = ? WHERE id = ?',
      [vin, model, status, options, id]
    );
    res.json({ message: 'Car updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a car by ID (only admin allowed)
router.delete('/:id', auth, authorizeRoles('admin'), async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM cars WHERE id = ?', [id]);
    res.json({ message: 'Car deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
