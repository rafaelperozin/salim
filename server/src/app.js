const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const user = require('./routes/user');
app.use("/api/user", user);

app.use(errors());

module.exports = app;