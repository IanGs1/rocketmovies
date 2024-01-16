module.exports = {
    jwt: {
        expiresIn: '1d',
        secret: process.env.AUTH_SECRET || 'default',
    }
}