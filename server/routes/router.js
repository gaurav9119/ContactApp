const express = require('express');
const route = express.Router()


const services = require('../services/render');
const controller = require('../controller/controller')


/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add contact
 * @method GET/ add-contact
 */ 
route.get('/add_contact',services.add_contact)

/**
 * @description update contact
 * @method GET/ update-contact
 */ 
route.get('/update_contact',services.update_contact)

// Api
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route