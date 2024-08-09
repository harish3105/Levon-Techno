const express = require('express');
const Teacher = require('../models/Teacher');
const router = express.Router();

router.post('/', async (req, res) => {
  const teacher = new Teacher(req.body);
  await teacher.save();
  res.json(teacher);
});

router.get('/', async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
});

module.exports = router;
