const express = require('express');
const { Category } = require('../db/models');
const { Expense } = require('../db/models');

const router = express.Router();

router.get('/all', async (req, res) => {
  try {
    const allCategories = await Category.findAll({ include: [{ model: Expense }] });
    res.json(allCategories);
  } catch (err) {
    console.log(err, 'hi');
  }
});

router.get('/chart', async (req, res) => {
  try {
    const allCategories = await Category.findAll({ include: [{ model: Expense }] });
    const filtCat = allCategories.filter((el) => el.Expenses.length);
    const chartData = {};
    filtCat.forEach((x) => chartData[x.title] = (x.Expenses.map((a) => a.sum)).reduce((a,b)=>a+b));
    console.log(Object.keys(chartData));
    res.json(chartData);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
