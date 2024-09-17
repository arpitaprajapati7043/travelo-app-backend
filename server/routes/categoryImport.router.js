const express = require('express');

const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            await Category.deleteMany(); // Using deleteMany instead of remove
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB);
        } catch (err) {
           // console.error("Database error:", err); // Log the detailed error
            res.status(500).json({ message: "Could not add data to DB", error: err.message });
        }
    });


module.exports = router;