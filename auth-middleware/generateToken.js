const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (user) => {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const secret = 'its a secret to everyone';
    const options = {
        expiresIn: '7d',
    };
    return jwt.sign(payload, secrets.jwtSecret, options)
};