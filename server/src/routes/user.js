const express = require('express');
// const { celebrate, Segments, Joi } = require('celebrate');

const SessionController = require('../controllers/SessionController');
const UserController = require('../controllers/UserController');

const routes = express.Router();

// Login
routes.route('/login').post(SessionController.login);

// List
routes.route('/').get(UserController.index);

// Specific
routes.route('/:id').get(UserController.get);

// Update
routes.route('/update/:id').put(UserController.update);

// Delete
routes.route('/delete/:id').delete(UserController.delete);

// Create
routes.route('/new').post(UserController.create);
    //    return  routes.post('/ongs', celebrate({
    //         [Segments.BODY]: Joi.object().keys({
    //             name: Joi.string().required(),
    //             email: Joi.string().required().email(),
    //             whatsapp: Joi.string().required().min(10).max(13),
    //             city: Joi.string().required(),
    //             uf: Joi.string().required().length(2),
    //         })
    //     }), UsersController.create);

module.exports = routes;