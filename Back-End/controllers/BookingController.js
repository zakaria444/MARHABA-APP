const booking = require('../models/Livreur');





const bookingproprietair = async (req, res) => {
  try {
    console.log(req.body)
    const date_from = req.body.date_from
    const date_to = req.body.date_to
    const status = req.body.status
    const payement_method = req.body.payement_method
    const total_price = req.body.total_price
    const user_id = req.body.user_id




    const newBbooking = new booking({
      date_from: date_from,
      date_to: date_to,
      status: status,
      payement_method: payement_method,
      total_price: total_price,
      user_id: user_id,
    })
  
    const saveBooking = await newBbooking.save()
    res.status(201).json({ success: true, data: saveBooking })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}


const bookingClient= async (bookingClient, res) => {
    
  
  // create a new booking
  const newBooking = new booking({
     ...bookingClient
  });

  await newBooking .save();
  return res.status(201).json({
      message: "Hurry! now you are successfully Booking.",
      success: true
      });

  

};


const getbooking = async (req, res) => {
      
    try {
      const bookings = await booking.find().populate('user_id');
      res.status(200).json({success: true , data: bookings})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }

const updatebooking = async (req,res)=> {
    const idbooking=req.params.bookingid;
    const {date_from}= req.body;
    const {date_to}= req.body;
    const {status}= req.body;
    let newvalues = { $set: {date_from: date_from, date_to:date_to,status:status} };
  let bookings = await booking.updateOne({_id:idbooking}, newvalues);
  return res.status(200).json({
      ...bookings,
      message:"Hurray ! You ar now updat booking Par ID .",
      success:false
    })
};


/*                   get bookinge par date                                        */

const getdate = async (req, res) => {
      C_D_F=req.body.date_from;
      C_D_T=req.body.date_to;


  try {
    const bookings = await booking.find({date_from:C_D_F,date_to:C_D_T});
// console.log(bookings[0]._id);
IDBooking=bookings[0]._id;
const bookingss = await bookingroom.find({booking_id:IDBooking});
console.log(bookingss);
    res.status(200).json({success: true , data: bookingss})

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
