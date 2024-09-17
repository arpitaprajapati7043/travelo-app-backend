const express=require('express');
const hotelController=require("../controller/hotelController")
const router=express.Router();


//data is added from model means database
router.get("/",hotelController.getAllHotelData)
module.exports=router;