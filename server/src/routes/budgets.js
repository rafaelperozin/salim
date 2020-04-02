const express = require('express');

const BudgetController = require('../controllers/BudgetController');

const routes = express.Router();

// List
routes.route('/').get(UserController.index);

// Specific
routes.route('/:id').get(UserController.get);

// Update
routes.route('/update/:id').put(UserController.update);

// Change Status
routes.route('/:status/:id').put(UserController.status);

// Create
routes.route('/new').post(UserController.create);

module.exports = routes;