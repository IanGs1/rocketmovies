const { sign } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

const knex = require('../database/knex');
const { compare }  = require('bcryptjs');

const AppError = require('../utils/AppError');

class SessionsController {
    async create(request, reply) {
        const { email, password } = request.body;

        const [user] = await knex("users").where({ email });
        if (!user) {
            throw new AppError("Email, or password, not valid!", 401);
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email, or password, not valid!", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            expiresIn: expiresIn,
            subject: String(user.id)
        });

        return reply.json({user, token});
    }
}

module.exports = SessionsController;