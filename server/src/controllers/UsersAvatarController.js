const knex = require('../database/knex');

const AppError = require('../utils/AppError');

const DiskStorage = require('../providers/DiskStorage');

class UserAvatarController {
    async update(request, response) {
        const { id } = request.user;
        const avatarFilename = request.file.filename;

        const diskStorage = new DiskStorage();

        const [user] = await knex("users").where({ id });

        if (!user) {
            throw new AppError("Only authenticated users can update the Avatar", 401);
        }

        if (user.avatar) {
            await diskStorage.deleteFile(user.avatar);
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        user.avatar = filename;

        await knex("users").where({ id }).update(user);

        return response.json(user);
    }
}

module.exports = UserAvatarController;