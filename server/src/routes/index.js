const { Router } = require('express');

const userRoutes = require('./user.routes');
const moviesRoutes = require('./movies.routes');

const router = Router();

router.get('/', (request, reply) => {
    reply.send('<h1>Hello world!</h1>')
});

router.use('/users', userRoutes);
router.use('/movies', moviesRoutes);

module.exports = router;