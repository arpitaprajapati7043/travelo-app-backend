const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'MY_SECRET_KEY';

/**
 * Generate a JWT token
 * @param {Object} data - The payload data to include in the token
 * @param {string} [expiresIn='1hr'] - The expiration time for the token (default is 1 hour)
 * @returns {string} - The generated token
 */
const generateToken = (data, expiresIn = '1hr') => {
    return jwt.sign(data, SECRET_KEY, { expiresIn });
};

/**
 * Verify a JWT token
 * @param {string} token - The token to verify
 * @returns {Object} - The decoded token data
 * @throws {Error} - Throws an error if the token is invalid or expired
 */
const verifyToken = (token) => {
    if (!token) {
        throw new Error('Token missing, please login to continue');
    }
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw new Error('Invalid or expired token');
    }
};

module.exports = { generateToken, verifyToken };
