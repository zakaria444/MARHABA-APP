const router = require("express").Router();

const {
  creatRepas,
  getRepas,
  getRepasById,
  updateRepas,
  deletRepas,



} = require("../controllers/repasController");
const {

  getLivreur,
  acceptLivreur,

} = require("../controllers/admin/Livreur");

const upload = require('../middlewares/upload')

router.post("/add" , upload.single('image_cover'),   creatRepas);
router.get("/",/*userAuth,  checkRole(['admin']),*/ getRepas);
router.get("/repasdetail/:repasId", getRepasById);
router.patch("/:repasId",  updateRepas);
router.delete("/:repasId",  deletRepas);


/*                   Livreur                  */

router.get("/getLivreur", getLivreur);
router.patch("/acceptLivreur/:livreurId", acceptLivreur);





module.exports = router;