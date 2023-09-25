const knex = require('../database/knex');

const AppError = require('../utils/AppError');
const { hash, compare } = require('bcryptjs');

class UsersController {
    async create(request, reply) {
        const { name, email, password } = request.body;

        const [emailAlreadyInUse] = await knex("users").where({ email });
        if (emailAlreadyInUse) {
            throw new AppError("Email already in use!", 400);
        }

        const hashedPassword = await hash(password, 8);

        const [id] = await knex("users").insert({
            name,
            email,
            password: hashedPassword
        });

        return reply.status(200).json({
            id,
            name,
            email,
        });
    }

    async show(request, reply) {
        const { id } = request.params;

        const [user] = await knex("users").where({ id }).select("id", "name", "email", "created_at", "updated_at");
        if (!user || user.length === 0) {
            throw new AppError("User not found, please insert a valid ID!", 404)
        }

        return reply.status(200).json(user);
    }
    
    async index(request, reply) {
        const users = await knex("users").select("name", "email", "avatar", "created_at", "updated_at");

        reply.status(200).json(users);
    }

    async update(request, reply) {
        const { name, email, password, new_password } = request.body;
        const { id } = request.params;

        const [user] = await knex("users").where({ id });
        if (!user) {
            throw new AppError("User not found, please insert a valid ID!", 404);
        }

        const [emailAlreadyinUse] = await knex("users").where({ email });
        if (emailAlreadyinUse && emailAlreadyinUse.id !== user.id) {
            throw new AppError("Email already in use!", 400);
        }

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Password does not match!", 401);
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (new_password) {
            const hashedPassword = await hash(new_password, 8);

            await knex("users").wherer({ id }).update({
                password: hashedPassword
            })
        }

        await knex("users").where({ id }).update({
            name: user.name,
            email: user.email,
            updated_at: knex.fn.now(),
        })

        return reply.status(200).json({
            name: user.name,
            email: user.email,
            updated_at: user.updated_at,
        })
    }

    async delete(request, reply) {
        const { password } = request.body;
        const { id } = request.params;

        const [user] = await knex("users").where({ id });
        if (!user) {
            throw new AppError("User not found, please insert a valid ID!", 404);
        }

        if (!password) {
            throw new AppError("You must provide a password!", 400);    
        } 

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Password does not match!", 401);
        }

        await knex("users").where({ id }).delete();

        return reply.status(200).json();
    }
}

module.exports = UsersController;