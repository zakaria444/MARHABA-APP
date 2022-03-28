const router = require("express").Router();
const {

  userAuth,

  checkRole
} = require("../controllers/Auth");
const {
  creatRepas,
  getRepas,
  updateRepas,
  deletRepas,

} = require("../controllers/repasController");

const upload = require('../middlewares/upload')

router.post("/add" , upload.single('image_cover'),   creatRepas);
router.get("/",/*userAuth,  checkRole(['admin']),*/ getRepas);
router.patch("/:repasId",  updateRepas);
router.delete("/:repasId",  deletRepas);




module.exports = router;