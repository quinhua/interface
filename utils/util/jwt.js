const jwt = require('jsonwebtoken');
const config = require('../config');

const getToken = (rule)=> {
    return config.token.headerToken + " " + jwt.sign(rule, config.token.jwtSecret, { expiresIn: config.token.jwtExpiresTime })
}

module.exports = {
    jwt,
    getToken
}