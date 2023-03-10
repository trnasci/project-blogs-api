const express = require('express');
require('dotenv').config();
const loginRouter = require('./Routes/loginRouter');
const userRouter = require('./Routes/userRouter');
const categoryRouter = require('./Routes/categoryRouter');
const postRouter = require('./Routes/postRouter');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

module.exports = app;