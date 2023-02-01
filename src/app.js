const express = require('express');
require('dotenv').config();
const loginRouter = require('./Routes/loginRouter');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);

module.exports = app;