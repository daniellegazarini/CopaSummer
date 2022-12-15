const express = require('express');
const loginRoute = require('./routes/login.route');
const copaRoute = require('./routes/copa.router');

const app = express();
app.use(express.json());

app.use('/login', loginRoute);
app.use('/copa', copaRoute);

module.exports = app;