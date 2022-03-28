const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
  creatHotel,
  getHotels,
  getHotel,
  updateHotel,
  getHoteletoiles,
  deletHotel,
  getHotelbycity,
  getHotelbycountry,
  getHotelbyName
} = require("../controllers/hotelController");

const {
  creatHotelImages,
  getImagesByHotel,
  OwnercreatHotelImages,
  getImage
} = require("../controllers/HotelsImagesController");

const upload = require('../middlewares/upload')

router.post("/add" , upload.single('image_cover'),  creatHotel);
router.post("/upload", upload.single('file'),  creatHotelImages);

router.get("/imageByHotel/:HotelId",  getImagesByHotel);
router.post("/upload", upload.array('image',8), OwnercreatHotelImages);

router.get("/",/*userAuth,  checkRole(['admin']),*/ getHotels);

router.get("/etoile/:hoteletoile", async(req,res)=>{
  await getHoteletoiles(req,res);
});
router.get("/:hotelId",  getHotel);
router.patch("/:hotelId",  updateHotel);
router.delete("/:hotelId",  deletHotel);
router.get("/city/:city", getHotelbycity);
router.get("/country/:country", getHotelbycountry);
router.get("/name/:name", getHotelbycountry);
// router.get("/city/:city", async(req,res)=>{
  //   await getHotelbycity(req,res);
  // });
  
  // router.get("/city/:city", getHotelbycity);


module.exports = router;