const express = require('express');
const { Category } = require('../db/models');
const { Expense } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const allCategories = await Category.findAll({ include: [{ model: Expense }] });
    console.log(allCategories, '00000000000000000');
    res.json(allCategories);
  } catch (err) {
    console.log(err, 'hi');
  }
}); // сделатьтонрмальный трай кэтч

module.exports = router;
