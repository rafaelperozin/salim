const express = require('express');

const TransactionController = require('../controllers/TransactionController');

const routes = express.Router();

// List
routes.route('/').get(TransactionController.index);

// Specific
routes.route('/:id').get(TransactionController.get);

// Update
routes.route('/update/:id').put(TransactionController.update);

// Delete
routes.route('/delete/:id').delete(TransactionController.delete);

// Create
routes.route('/new').post(TransactionController.create);

module.exports = routes;