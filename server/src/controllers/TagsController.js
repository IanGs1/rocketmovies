const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class TagsController {
    async show(request, reply) {
        const { movie_id } = request.params;

        const movie = await knex("movies").where({ id: movie_id }).first();
        if (!movie) {
            throw new AppError("Movie not found, please insert a valid ID", 404);
        };

        const tags = await knex("tags").where({ movie_id }).groupBy('name');
        
        return reply.status(200).json({
            tags,
        });
    }
}

module.exports = TagsController;