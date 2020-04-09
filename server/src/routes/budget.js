const express = require('express');

const BudgetController = require('../controllers/BudgetController');

const routes = express.Router();

// List
routes.route('/').get(BudgetController.index);

// Specific
routes.route('/:id').get(BudgetController.get);

// Update
routes.route('/update/:id').put(BudgetController.update);

// Change Status
routes.route('/:status/:id').put(BudgetController.status);

// Create
routes.route('/new').post(BudgetController.create);

module.exports = routes;