const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.put('/update/:id', celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                budget: Joi.number().positive().required(),
                status: Joi.string().valid('active', 'inactive')
            })
        }), UpdateBudget);
// Delete
routes.route('/delete/:id').delete(DeleteBudget);
// Create
routes.post('/new', celebrate({
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                budget: Joi.number().positive().required()
            })
        }), NewBudget);

module.exports = routes;