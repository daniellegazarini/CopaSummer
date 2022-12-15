const express = require('express');
const { validate } = require('../middlewares/validateLogin');

const loginRoute = express.Router();

loginRoute.post('/', validate, (req, res) => res.status(200)
  .json({ message: 'Login realizado com sucesso ' }));

  module.exports = loginRoute;