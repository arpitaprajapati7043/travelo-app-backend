const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwtUtils'); // Ensure this function is correct
const User = require('../model/user.model'); // Ensure this is the correct model

const protectedMiddleware = async (req, res, next) => {
    try {
        const { token = null } = req.cookies;

        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }

        // Assuming verifyToken is an async function
        const decoded = await verifyToken(token);
        const { number } = decoded;

        const user = await User.findOne({ number });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        res.locals.user = user;
        next();
    } catch (error) {
      
        res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = protectedMiddleware; // Exporting function directly
