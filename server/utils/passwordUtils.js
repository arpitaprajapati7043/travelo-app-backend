// bcryptFunctions.js

const { hash, genSalt, compare } = require("bcrypt");

const generatePasswordHash = async (password) => {
    const salt = await genSalt();
    const passwordHash = await hash(password, salt);
    console.log("Original Password:", password);
    console.log("Hashed Password:", passwordHash);
    return passwordHash;
};

const verifyPassword = async (password, hash) => {
    const isVerified = await compare(password, hash);
    console.log("Password Verified:", isVerified);
    return isVerified;
};

module.exports = { generatePasswordHash, verifyPassword };
const password='abcd';
//  generatePasswordHash(password) 

//  const pwdhash='$2b$10$zT21OWGTSanhnsi8Eqrm3.qSWxmGdviebQxMLP03LhrK6JZhumRFm';
//  verifyPassword(password,pwdhash)