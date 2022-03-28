const { Schema, model } = require('mongoose');
const BookingSchema = new Schema(
    {
        date_from: {
            type: String,
            required: true,
        },
        date_to: {
            type: String,
            required: true
        },
        total_price: {
            type: String,
            required: true
        },
        payement_method: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: true
        },
        user_id: 
            { 
                type: Schema.Types.ObjectId, ref: 'users'
            }
        
    }, {


},
    { timestamps: true},
);
module.exports = model("booking", BookingSchema);