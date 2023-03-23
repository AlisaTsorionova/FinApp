const express = require('express');
const { Category } = require('../db/models');
const { Expense } = require('../db/models');

const router = express.Router();

function formatDate(str) {
  const year = +str.slice(0, 4);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[+str.slice(8, 10)];
  const day = +str.slice(5, 7);
  return { year, month, day };
}

router.get('/list', async (req, res) => {
  // console.log('eeeexpeeeenseeeee');
  try {
    const expensesList = await Expense.findAll({ include: [{ model: Category }] });
    res.json(expensesList);
  } catch (error) {
    console.log(error, 'no expenses list');
  }
});

router.post('/add', async (req, res) => {
  try {
    const {
      title, sum, date, description, category_id,
    } = req.body;
    const fullDate = formatDate(date);
    // console.log(date, req.body, '------------------------');
    const newExpense = await Expense.create({
      title,
      sum: +sum,
      description,
      year: fullDate.year,
      month: fullDate.month,
      day: fullDate.day,
      category_id: +category_id,
      user_id: req.session.user?.id || 1,
    });
    // достать только эту
    res.json(newExpense);
  } catch (err) {
    console.log(err, 'couldn`t add expense');
  }
}); // сделатьтонрмальный трай кэтч

router.post('/delete/:id', async (req, res) => {
  const { userId } = req.body;
  const { id } = req.params;
  // console.log(req.body, req.session.user.id, '99999999');
  try {
    if (userId === req.session.user.id) {
      await Expense.destroy({ where: { id } });
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error, 'error');
    res.sendStatus(404);
  }
});

module.exports = router;
