const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const userRoutes = Router();
const usersController = new UsersController();

userRoutes.post('/', usersController.create);
userRoutes.get('/', usersController.index);
userRoutes.get('/:id', usersController.show);
userRoutes.put('/:id', usersController.update);
userRoutes.delete('/:id', usersController.delete);

module.exports = userRoutes;