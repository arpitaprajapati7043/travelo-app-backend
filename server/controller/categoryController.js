const category=require("../model/category.model");
 
exports.getallCategory=async(req,res)=>{
    try {
        const categories=await category.find({});
        res.json(categories)
    } catch (error) {
       
        res.status(404).json({message:'could not find category'})
    }
}