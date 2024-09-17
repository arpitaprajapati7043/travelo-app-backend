const express=require("express");
const router=express.Router();
const singleHotelController=require("../controller/singleHotelController")



router.get("/:id",singleHotelController.getSinglehotel)
   
module.exports=router;