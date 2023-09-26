const { Router } = require('express');

const MoviesController = require('../controllers/MoviesController');

const movieRoutes = Router();
const moviesController = new MoviesController();

movieRoutes.post('/:user_id', moviesController.create);

module.exports = movieRoutes;
