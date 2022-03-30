const booking = require('../models/Livreur');

const getbooking = async (req, res) => {
    try {
      const bookings = await booking.find().populate('user_id');
      res.status(200).json({success: true , data: bookings})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }
  module.exports = {
    bookingproprietair,
    bookingClient,
    updatebooking,
    getbooking,
    getdate
    
    };