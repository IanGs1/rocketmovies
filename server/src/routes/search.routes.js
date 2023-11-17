const { Router } = require('express');

const SearchController = require('../controllers/SearchController');

const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const searchRoutes = Router();
const searchController = new SearchController();

searchRoutes.use(ensureAuthenticated)

searchRoutes.get('/', searchController.index);

module.exports = searchRoutes;
