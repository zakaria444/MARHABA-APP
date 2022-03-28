const mongoose = require("mongoose");


const HotelImageShema = mongoose.model(
    "images",
    new mongoose.Schema({
        image: {
            type: String,
            required: true,
        },
        hotel_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hotel'
        },
    })
);

module.exports = HotelImageShema;