const { Router } = require('express');

const router = Router();

router.get('/', (request, reply) => {
    reply.send('<h1>Hello world!</h1>')
});

module.exports = router;