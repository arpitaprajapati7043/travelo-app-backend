const express=require("express");

const wishlistController=require("../controller/wishlistController")
const protectedMiddleware = require('../middleware/protectedMiddleware');
const router=express.Router();

router.post("/",protectedMiddleware,wishlistController.createWishlist)
router.delete("/:id",protectedMiddleware ,wishlistController.deleteHotel)
router.get("/",protectedMiddleware ,wishlistController.getAllhotel)




module.exports=router;