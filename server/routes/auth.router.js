const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const protectedMiddleware = require('../middleware/protectedMiddleware');

// Define routes with correct handler functions
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/login', protectedMiddleware, authController.loginWithToken);

module.exports = router;


// router.route("/login").post(async(req,res)=>{
//     try{
//         const {number,password}=req.body;
//         const {password:passwordHash,...userData}=await User.findOne({number})
//         // const user=await User.findOne({number});
//         console.log(password);
       

// !number && res.status(401).json({message:'invalid mobile number'})
// //password validation
// const isVerified=await verifyPassword(password,passwordHash);
// if(isVerified)
// {
// res.status(200).json({message:`${number} logged in successfully`,data:userData})

// }
// else{
//     res.status(401).json({message:'Invalid password '})
// }
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// })

