const router = require("express").Router();


const {
  order_delivery,
  status_command,
  show_command_repas,
  show_command
  } = require("../controllers/Livreur/Command_livreur");



  router.post('/order_delivery/:command_id', async(req,res)=>{
    await order_delivery(req,res);
});

router.post('/status_command/:command_id', async(req,res)=>{
  await status_command(req,res);
});

router.get('/show_command_repas/:commandId', async(req,res)=>{
  await   show_command_repas(req,res);
});
router.get('/show_command', async(req,res)=>{
  await   show_command(req,res);
});










module.exports = router;
