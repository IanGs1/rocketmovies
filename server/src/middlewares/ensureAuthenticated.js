const { verify } = require('jsonwebtoken');
const authConfig = require('../configs/auth');

const AppError = require('../utils/AppError');

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        console.log("JWT Token has not been informed")

        throw new AppError("JWT Token has not been informed", 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret);

        request.user = {
            id: Number(user_id),
        }

        next();
    } catch {
        console.log("JWT Token invalid!");

        throw new AppError("JWT Token invalid!", 401)
    }
}

module.exports = ensureAuthenticated;