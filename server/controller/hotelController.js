//const hotels=require("../data/hotels");
const Hotel=require("../model/hotel.model")


exports.getAllHotelData=async(req,res)=>{
    const hotelCategory=req.query.category //localhost://8080/api/hotels?category=National+Park
        try {
            let hotels
            if(hotelCategory)
            {
                hotels=await Hotel.find({category:hotelCategory});
            }
            else{
                hotels=await Hotel.find({});
            }
        //    const hotels=await Hotel.find({}) 
           hotels? res.json(hotels):res.status(404).json({message:'No data found'});
        } catch (error) {
         
        }
    }

//router.route("/hotelCategory") //localhost:8080/api/hotels/hotelCateory
/* local data added from data
// router.route("/") 
// .get((req,res)=>{
//     res.json(hotels.data);
// })
 */