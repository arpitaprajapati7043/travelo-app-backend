
const Hotel=require("../model/hotel.model")
// localhost:8080/api/hotes/5612367899909000

exports.getSinglehotel=async(req,res)=>{
    try {
      const {id}=req.params; // destrcuturing  {id:67857890087665788}
      const hotel=await Hotel.findById(id)
     res.json(hotel)
    } catch (error) {
     
       res.status(404).json({message:"No hotel found"})
    }
}