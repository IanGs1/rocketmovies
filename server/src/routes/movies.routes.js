const { Router } = require('express');

const MoviesController = require('../controllers/MoviesController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const movieRoutes = Router();
const moviesController = new MoviesController();

movieRoutes.use(ensureAuthenticated)

movieRoutes.post('/', moviesController.create);
movieRoutes.get('/', moviesController.index);
movieRoutes.get('/:movie_id', moviesController.show);
movieRoutes.delete('/:movie_id', moviesController.delete);

module.exports = movieRoutes;
