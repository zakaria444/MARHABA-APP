const HotelImage = require("../models/HotelsImages")


const getImagesByHotel = async (req, res) => {
    const HotelId = req.params.HotelId
    try {
        const hotelimages = await HotelImage.find({
            hotel_id: HotelId
        })
        res.status(200).json({ success: true, data: hotelimages })
    } catch (error) {
        res.status(409).json({ success: false, data: [], error: error })
    }
}
const getImage = async (req, res) => {
    const Id = req.params.Id
    try {
        const image = await HotelImage.find({ _id: Id })
        res.status(200).json({ success: true, data: image })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}

const creatHotelImages = async (req, res) => {
    try {
        const { hotel_id } = req.body

        const newHotelImages = new HotelImage({
            hotel_id: hotel_id,
        }
        )
        if (req.file) {
            newHotelImages.image = req.file.path
        }
        const saveHotel = await newHotelImages.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}

const OwnercreatHotelImages = async (req, res) => {
    try {
        const { hotel_id } = req.body

        const newHotelImages = new HotelImage({
            hotel_id: hotel_id,
        }
        )
        if (req.file) {
            newHotelImages.image = req.file.path
        }
        const saveHotel = await newHotelImages.save()
        res.status(201).json({ success: true, data: saveHotel })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
}





module.exports = {
    creatHotelImages,
    getImagesByHotel,
    OwnercreatHotelImages,
    getImage
};

