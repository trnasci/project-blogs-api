const express = require('express');
require('dotenv').config();
const loginRouter = require('./Routes/loginRouter');
const userRouter = require('./Routes/userRouter');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);

module.exports = app;