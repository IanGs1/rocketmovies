const knex = require('../database/knex');

const AppError = require('../utils/AppError');

class MoviesController {
    async create(request, reply) {
        const { title, description, rating, tags } = request.body;
        const { id: user_id } = request.user;

        const [userExists] = await knex("users").where({ id: user_id });
        if (!userExists) {
            console.log('user_id not found, please insert a valid user_id!')
            throw new AppError('user_id not found, please insert a valid user_id!', 404);
        }

        const [movieAlreadyExists] = await knex("movies").where({ title, user_id });
        if (movieAlreadyExists) {
            console.log('Movie already exists, please insert a new movie!')
            throw new AppError('Movie already exists, please insert a new movie!', 400);
        }
        
        if (0 > Number(rating) > 5) {
            console.log('Rating must be between 0 and 5')
            throw new AppError('Rating must be between 0 and 5', 400);
        }

        const [movie_id] = await knex("movies").insert({
            title,
            description,
            rating,
            user_id
        });

        if (!Array.isArray(tags)) {
            console.log('Tags must be an array!')
            throw new AppError('Tags must be an array!', 400);
        }

        tags.map(async tag => {
            await knex("tags").insert({ name: tag, user_id, movie_id });
        });

        return reply.status(200).json({
            movie_id,
            title,
            description,
            rating,
            tags,
        })
    }

    async search(request, reply) {
        const { user_id } = request.params;
        const { title } = request.query;

        const [movie] = await knex("movies").whereLike('title', `%${title}%`).where({ user_id });
        if (!movie) {
            console.log("Movie not found, please insert a valid title!")

            throw new AppError("Movie not found, please insert a valid title!", 404);
        }

        const tags = await knex("tags").where({ movie_id: movie.id }).orderBy('name');

        return reply.status(200).json({
            ...movie,
            tags
        })
    }

    async show(request, reply) {
        const { movie_id } = request.params;

        const movie = await knex("movies").where({ id: movie_id }).first();
        if (!movie) {
            throw new AppError('Movie not found, please insert a valid ID!');
        }

        const tags = await knex("tags").where({ movie_id });

        return reply.status(200).json({
            movie,
            tags,
        })
    }

    async index(request, reply) {
        const { id: user_id } = request.user;

        const [user] = await knex("users").where({ id: user_id });
        if (!user) {
            console.log("User not found, please insert a valid ID!")

            throw new AppError("User not found, please insert a valid ID!", 404);
        }

        const movies = await knex("movies").where({ user_id });
        const userTags = await knex("tags").where({ user_id });

        const movieWithTags = movies.map( movie => {
            const movieTags = userTags.filter(tag => tag.movie_id === movie.id);

            return {
                ...movie,
                tags: movieTags,
            }
        });

        return reply.status(200).json(movieWithTags);
    }

    async delete(request, reply) {
        const { movie_id } = request.params;
        
        const [movie] = await knex("movies").where({ id: movie_id });
        if (!movie) {
            throw new AppError("Movie not found, please insert a valid ID!", 404);
        }

        await knex("movies").where({ id: movie_id }).delete();

        return reply.status(200).json();
    }
};

module.exports = MoviesController;