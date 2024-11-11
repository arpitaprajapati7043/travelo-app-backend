// authController.js
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { generatePasswordHash, verifyPassword } = require('../utils/passwordUtils');
const User = require("../model/user.model");

exports.register = async (req, res) => {
    try {
        const { username, email, number, password } = req.body;
        if (!username || !email || !number || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const passwordHash = await generatePasswordHash(password);
        const newUser = new User({ username, email, number, password: passwordHash });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
       
        res.status(500).json({ message: 'Error creating user' });
    }
};

exports.login = async (req, res) => {
    try {
        const { number, password } = req.body;

        if (!number || !password) {
            return res.status(400).json({ message: 'Number and password are required' });
        }

        const user = await User.findOne({ number });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const { password: passwordHash, ...userData } = user.toObject();
        const isVerified = await verifyPassword(password, passwordHash);

        if (isVerified) {
            const token = generateToken({ number }); // Include necessary data in the token
            res.cookie('token', token, { maxAge: 3600_000, httpOnly: true, secure:process.env.NODE_ENV === 'production',  
                sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',  path: '/',}); // Token expires in 1 hour
            res.status(200).json({ message: 'Logged in successfully', token, user: {
                username: user.username,  // Make sure the username is returned
                email: user.email,
                number: user.number,
              }});
        } else {
            res.status(401).json({ message: 'Invalid password' });
        }
    } catch (error) {
    
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.loginWithToken = async (req, res, next) => {
    try {
        const { password, ...userDoc } = res.locals.user.toObject();
        res.send({ success: true, message: "Logged in with Cookie", user: userDoc });
    } catch (error) {
        next(error);
    }
};

exports.logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
};

