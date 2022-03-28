const { Schema,model } = require('mongoose');
const HotelSchema = new Schema   (
    {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
      
        stars: {
            type: Number,
            required: true
        },

        image_cover: {
            type: String,
            required: true
        },
   
        localisation: {
            city: {
                type: String,
                required: [true, 'Hotel must have a city']
            },
            country: {
                type: String,
                required: [true, 'Hotel must have a coutry']
            }
        },
        user_id: 
        { 
            type: Schema.Types.ObjectId, ref:'users' 
        }
    },

);
module.exports = model("Hotel", HotelSchema);