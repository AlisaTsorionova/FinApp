const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) return res.status(400).json({ message: 'Все поля должны быть заполнены' });

    const encryptedPass = await bcrypt.hash(password, 7);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name: fullname, password: encryptedPass },
    });

    if (created) {
      req.session.user = {
        id: user.id, name: user.name, email: user.email,
      };
      res.json(req.session.user);
    } else {
      res.sendStatus(400).json({ message: 'Вы уже зарегистрированны, пройдите в авторизацию' });
    }
  } catch {
    res.sendStatus(500);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.password;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

// router.post('/login', async (req, res) => {
//   // if (email && password) {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ message: 'Все поля обязательны для заполнения!' });
//     const user = await User.findOne({
//       where: { email },
//     });
//     const isPassValid = await bcrypt.compare(password, user.password);
//     if (isPassValid) {
//       req.session.user = {
//         id: user.id, name: user.name, email: user.email,
//       };
//       res.json(req.session.user);
//     } else {
//       res .json({ message: 'Неверно введён логин или пароль пользователя' });
//     }
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(500);
//   }
// });

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

module.exports = router;
