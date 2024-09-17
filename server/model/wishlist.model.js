const mongoose=require("mongoose");
const wishlistSchema=new mongoose.Schema({
hotelId:{type:String,rquired:true}
})
const wishlistModel=mongoose.model("wishlist",wishlistSchema)
module.exports=wishlistModel;