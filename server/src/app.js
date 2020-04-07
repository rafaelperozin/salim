const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const user = require('./routes/user');
const budget = require('./routes/budget');
app.use("/user", user);
app.use("/budget", budget);

app.use(errors());

module.exports = app;