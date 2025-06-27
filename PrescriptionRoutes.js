const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { patient_name, doctor_name, medicines, notes } = req.body;
  const sql = 'INSERT INTO prescriptions (patient_name, doctor_name, medicines, notes) VALUES (?, ?, ?, ?)';
  db.query(sql, [patient_name, doctor_name, medicines, notes], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Prescription saved', id: result.insertId });
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM prescriptions ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id', (req, res) => {
  db.query('SELECT * FROM prescriptions WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0) return res.status(404).json({ error: 'Prescription not found' });
    res.json(result[0]);
  });
});

module.exports = router;
