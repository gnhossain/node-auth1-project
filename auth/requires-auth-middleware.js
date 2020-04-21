const bcrypt = require('bcrypt');

const Users = require('../users/users-model');

module.exports = (req, res, next) => {
  if (req.session && req.session.username){
    next();
  } else {
    res.status(401).json ({you:"cannot pass"})
  };
}