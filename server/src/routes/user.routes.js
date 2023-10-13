const { Router } = require('express');

const multer = require('multer');
const uploadConfig = require('../configs/upload');

const UsersController = require('../controllers/UsersController');
const UsersAvatarController = require('../controllers/UsersAvatarController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const userRoutes = Router();
const usersController = new UsersController();

const upload = multer(uploadConfig.MULTER);
const usersAvatarController = new UsersAvatarController();

userRoutes.post('/', usersController.create);
userRoutes.get('/', ensureAuthenticated, usersController.show);
userRoutes.put('/', ensureAuthenticated, usersController.update);
userRoutes.delete('/', ensureAuthenticated, usersController.delete);

userRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), usersAvatarController.update);

module.exports = userRoutes;