const express = require('express');

const ListBudget = require('../controllers/Budget');
const GetBudget = require('../controllers/Budget/Get');
const UpdateBudget = require('../controllers/Budget/Update');
const DeleteBudget = require('../controllers/Budget/Delete');
const NewBudget = require('../controllers/Budget/Create');

const routes = express.Router();

// List
routes.route('/').get(ListBudget);
// Specific
routes.route('/:id').get(GetBudget);
// Update
routes.route('/update/:id').put(UpdateBudget);
// Delete
routes.route('/delete/:id').delete(DeleteBudget);
// Create
routes.route('/new').post(NewBudget);

module.exports = routes;