const Hotel = require("../models/Hotel")

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find()
    res.status(200).json({ success: true, data: hotels })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}
const getHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  try {
    const hotel = await Hotel.find({ _id: hotelId })
    res.status(200).json({ success: true, data: hotel })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}

const creatHotel = async (req, res) => {

  console.log('request',req.body);



  //  console.log(req.body.localisation.city);
  //  res.status(201).json({ success: true, data: req.body })
  try {
    const name = req.body.name
    const description = req.body.description
    const stars = req.body.stars
    const city  = req.body.city
    const country  = req.body.country 
    // const image_cover = req.body.image_cover
    const user_id  = req.body.user_id



    const newHotel = new Hotel({
      name: name,
      description: description,
      stars: stars,
      localisation: {city,country},
      user_id:user_id


    })
    
      if (req.file) {
      newHotel.image_cover = req.file.originalname
    }
  
    console.log("hello");
    const saveHotel = await newHotel.save()
    res.status(201).json({ success: true, data: saveHotel })
    

  } catch (error) {
   
        console.log(error)
        res.status(404).json({ success: false, data: [], error: error })
        // console.log('file',req);
  }

}

const updateHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  const { name } = req.body
  const { description } = req.body
  const { stars } = req.body

  const city = req.body.localisation[0]
  const country = req.body.localisation[1]

  try {
    const updatedHotelData = await Hotel.updateOne({ _id: hotelId }, {
      $set: {
        name: name,
        description: description,
        stars: stars,
        localisation:{city , country },

        
      }
    })
    res.status(201).json({ success: true, data: updatedHotelData })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const deletHotel = async (req, res) => {
  const hotelId = req.params.hotelId
  try {
    await Hotel.remove({ _id: hotelId })
    res.status(200).json({ success: true, data: deletHotel })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const getHoteletoiles = async (req, res) => {
  const Hoteletoiless = req.params.hoteletoile;
  // console.log(Hoteletoiless);
  try {
    const hoteletoil = await Hotel.find({ stars: Hoteletoiless });
    console.log(hoteletoil);
    res.status(200).json({ success: true, data: hoteletoil })
  } catch (error) {
    res.status(404).json({ success: false, data: [], error: error })
  }
}



const getHotelbycity = async (req, res, next) => {

  try {
    const hotel = await Hotel.find({
      "localisation.city": req.params.city
    });
    res.status(200).json({
      status: "succes",
      data: hotel
    });
  } catch (err) {
    res.send(err);
  }
};
const getHotelbyName = async (req, res, next) => {

  try {
    const hotel = await Hotel.find({
      "name": req.body.name
    });
    res.status(200).json({
      status: "succes",
      data: hotel
    });
  } catch (err) {
    res.send(err);
  }
};
const getHotelbycountry = async (req, res, next) => {

  try {
    const hotel = await Hotel.find({
      "localisation.country": req.params.country
    });
    res.status(200).json({
      status: "succes",
      data: hotel
    });
  } catch (err) {
    res.send(err);
  }
};


module.exports = {
  creatHotel,
  getHotels,
  getHotel,
  updateHotel,
  getHoteletoiles,
  deletHotel,
  getHotelbycity,
  getHotelbycountry,
  getHotelbyName
};