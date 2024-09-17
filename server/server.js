const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const connectDB = require('./dbConnectioon');
// Import routers
const hotelDataAddedToDbRouter = require('./routes/dataImport.router');
const categoryDataAddedToDbRouter = require('./routes/categoryImport.router');
const hotelRouter = require('./routes/hotel.router');
const categoryRouter = require('./routes/category.router');
const singleHotelRouter = require('./routes/singleHotel.router');
const authRouter = require('./routes/auth.router');
const wishlistRouter = require('./routes/wishlist.router');


const PORT = process.env.PORT || 4000;
// http://localhost:4000/router

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// used to read data passed to request body 
app.use(express.json());
app.use(cookieParser());

// Database connection
connectDB();

http://localhost:4000/router
app.use('/api/hoteldata', hotelDataAddedToDbRouter);
app.use('/api/categorydata', categoryDataAddedToDbRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/category', categoryRouter);
app.use('/api/hotels', singleHotelRouter);
app.use('/api/auth', authRouter);
app.use('/api/wishlist', wishlistRouter);




// start server at port and run the callback once started
app.listen(process.env.PORT || PORT, () => {
    console.clear();
    console.log(`server started on port ${PORT}!!!`)
})