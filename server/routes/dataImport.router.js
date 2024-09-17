const express = require('express');

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            await Hotel.deleteMany(); // Using deleteMany instead of remove
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB);
        } catch (err) {
           // console.error("Database error:", err); // Log the detailed error
            res.status(500).json({ message: "Could not add data to DB", error: err.message });
        }
    });


module.exports = router;