const routes = require('express').Router();
const controllers = require('../controllers/controllers');

routes.post('/signin', controllers.signin);
routes.post('/register', controllers.register);
routes.post('/users', controllers.users);
routes.get('/users', controllers.users );


module.exports = routes;