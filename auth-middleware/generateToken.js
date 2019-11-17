const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (user) => {
    const payload = {
        subject: 'user',
        username: user.username
    }

    const secret = secrets.jwtSecret;
    const options = {
        expiresIn: '7d',
    };
    return jwt.sign(payload, secret, options)
};

