const wishlistModel=require("../model/wishlist.model")

exports.createWishlist=async(req,res)=>{
    const newWishlist=new wishlistModel(req.body);
    try{
    const savedwishlist=await newWishlist.save();
    res.status(201).json(savedwishlist);
    }
    catch(error)
    {
     
        res.status(501).json({message:'failed to create wishlist'}); 
    }
}

exports.deleteHotel=async (req, res) => {
    try{
        await wishlistModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Hotel Deleted From Wishlist"})
    }catch(err){
        res.status(500).json({ message: "Could not delete hotel from wishlist" })
    }
}

exports.getAllhotel=async(req,res)=>{
    try{
    const wishlist=await wishlistModel.find({});
    wishlist ?res.json(wishlist):res.json({message:'No items found in the wishlist'})
    }
    catch(error)
    {
     
        res.status(500).json(error)
    }
}