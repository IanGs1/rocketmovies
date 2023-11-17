const knex = require('../database/knex');

class SearchController {
  async index(request, reply) {
    const { id: user_id } = request.user;
    const { title } = request.query;

    const movies = await knex("movies").whereLike('title', `%${title}%`);
    // if (!movie) {
    //     console.log("Movie not found, please insert a valid title!")

    //     throw new AppError("Movie not found, please insert a valid title!", 404);
    // }

    const userTags = await knex("tags").where({ user_id });

    const moviesWithTags = movies.map( movie => {
        const movieTags = userTags.filter(tag => tag.movie_id === movie.id);

        return {
            ...movie,
            tags: movieTags,
        }
    });

    return reply.status(200).json(moviesWithTags);
  }
}

module.exports = SearchController;