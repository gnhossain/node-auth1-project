const router = require('express').Router();
const bcrypt = require('bcrypt');
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});





module.exports = router;