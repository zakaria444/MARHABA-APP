const router = require("express").Router();
const {
  
    userAuth,
   
    checkRole
  } = require("../controllers/Auth");

const {
    Getallclients,
    updateclient,
    deletclient,
    getClient
  } = require("../controllers/Clientcontrollers");



  router.get('/getclient', async(req,res)=>{
    await Getallclients(req,res,"user");
});
router.get('/getclient/:clientid', async(req,res)=>{
  await getClient(req,res,"user");
});




// router.post('/updateclient/:clientid',userAuth,checkRole(['admin']), async(req,res)=>{
router.post('/updateclient/:clientid', async(req,res)=>{

  await updateclient(req,res);
});
router.post('/deletclient/:clientid',  async(req,res)=>{
    await deletclient(req,res);
});




module.exports = router;
