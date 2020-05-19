const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('../controllers/SessionController');
const ListUser = require('../controllers/User');
const GetUser = require('../controllers/User/Get');
const UpdateUser = require('../controllers/User/Update');
const DeleteUser = require('../controllers/User/Delete');
const NewUser = require('../controllers/User/Create');

const routes = express.Router();

// Login
routes.route('/login').post(SessionController);

// List
routes.route('/').get(ListUser);

// Specific
routes.route('/:id').get(GetUser);

// Update
routes.put('/update/:id', celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                mobile: Joi.string().min(10).max(13).pattern(/^[0-9]+$/).required(),
                city: Joi.string().required(),
                country: Joi.string().required().length(2),
            })
        }), UpdateUser);

// Delete
routes.route('/delete/:id').delete(DeleteUser);

// Create
routes.post('/new', celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                mobile: Joi.string().min(10).max(13).pattern(/^[0-9]+$/).required(),
                city: Joi.string().required(),
                country: Joi.string().required().length(2),
            })
        }), NewUser);

module.exports = routes;