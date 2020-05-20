// ! Need improvements on the date validation

const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ListTransaction = require('../controllers/Transaction');
const GetTransaction = require('../controllers/Transaction/Get');
const UpdateTransaction = require('../controllers/Transaction/Update');
const DeleteTransaction = require('../controllers/Transaction/Delete');
const NewTransaction = require('../controllers/Transaction/Create');

const routes = express.Router();

// List
routes.route('/').get(ListTransaction);

// Specific
routes.route('/:id').get(GetTransaction);

// Update
routes.put('/update/:id', celebrate({
            [Segments.BODY]: Joi.object().keys({
                type: Joi.string().valid('expense', 'income'),
                title: Joi.string().required(),
                value: Joi.number().positive().required(),
                date: Joi.string().pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/).required(),
                status: Joi.string().valid('to pay', 'paid'),
                budget_id: Joi.number().integer().positive().required()
            })
        }), UpdateTransaction);

// Delete
routes.route('/delete/:id').delete(DeleteTransaction);

// Create
routes.post('/new', celebrate({
            [Segments.BODY]: Joi.object().keys({
                type: Joi.string().valid('expense', 'income'),
                title: Joi.string().required(),
                value: Joi.number().positive().required(),
                date: Joi.string().pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/).required(),
                status: Joi.string().valid('to pay', 'paid'),
                budget_id: Joi.number().integer().positive().required()
            })
        }), NewTransaction);

module.exports = routes;