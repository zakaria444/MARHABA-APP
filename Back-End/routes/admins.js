const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
  creatRepas,
  getRepas,
  updateRepas,
  getHoteletoiles,
  deletRepas,
  getHotelbycity,
  getHotelbycountry,
  getHotelbyName
} = require("../controllers/repasController");

const {
  creatHotelImages,
  getImagesByHotel,
  OwnercreatHotelImages,
  getImage
} = require("../controllers/HotelsImagesController");

const upload = require('../middlewares/upload')

router.post("/add" , upload.single('image_cover'),   creatRepas);
router.post("/upload", upload.single('file'),  creatHotelImages);

router.get("/imageByHotel/:HotelId",  getImagesByHotel);
router.post("/upload", upload.array('image',8), OwnercreatHotelImages);

router.get("/",/*userAuth,  checkRole(['admin']),*/ getRepas);


router.patch("/:repasId",  updateRepas);
router.delete("/:repasId",  deletRepas);




module.exports = router;