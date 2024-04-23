const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../models/message');
require('dotenv').config();

connectDB();

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.render('index', { messages });
});

router
  .route('/new')
  .get((req, res) => {
    res.render('form');
  })
  .post(async (req, res) => {
    const { message, author } = req.body;
    await Message.create({
      text: message,
      user: author,
      time: new Date().toLocaleString(),
    });
    res.redirect('/');
  });

async function connectDB() {
  await mongoose.connect(process.env.DB_URL);
}

module.exports = router;
