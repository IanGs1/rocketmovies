const { Router } = require('express');

const MoviesController = require('../controllers/MoviesController');

const movieRoutes = Router();
const moviesController = new MoviesController();

movieRoutes.post('/:user_id', moviesController.create);
movieRoutes.get('/:movie_id', moviesController.show);
movieRoutes.delete('/:movie_id', moviesController.delete);

module.exports = movieRoutes;
