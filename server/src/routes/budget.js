const express = require('express');

const BudgetController = require('../controllers/BudgetController');

const routes = express.Router();

// List
routes.route('/').get(BudgetController.index);

// Specific
routes.route('/:id').get(BudgetController.get);

// Update
routes.route('/update/:id').put(BudgetController.update);

// Delete
routes.route('/delete/:id').delete(BudgetController.delete);

// Create
routes.route('/new').post(BudgetController.create);

module.exports = routes;