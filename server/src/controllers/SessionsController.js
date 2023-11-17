const { sign, verify } = require('jsonwebtoken');
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

    async show(request, reply) {
        const { token } = request.body;

        const tokenIsValid = verify(token, authConfig.jwt.secret,);
        if (!tokenIsValid) {
            throw new AppError("Token is either expired or invalid!", 401);
        }

        return reply.status(200).json({
            token
        });
    }
}

module.exports = SessionsController;