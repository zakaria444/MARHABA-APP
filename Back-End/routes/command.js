const router = require("express").Router();
const {
  
    userAuth,
   
    checkRole
  } = require("../controllers/Auth");

const {
  AddCommand,

  } = require("../controllers/command/Command");


  router.post("/addcommand/:userId" ,  AddCommand);





module.exports = router;
