const { Router } = require('express');

const MoviesController = require('../controllers/MoviesController');

const movieRoutes = Router();
const moviesController = new MoviesController();

movieRoutes.post('/:user_id', moviesController.create);
movieRoutes.get('/', moviesController.show);
movieRoutes.get('/:user_id', moviesController.index);
movieRoutes.delete('/:movie_id', moviesController.delete);

module.exports = movieRoutes;
