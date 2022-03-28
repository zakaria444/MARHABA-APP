const router = require("express").Router();


const {
    bookingproprietair,
    updatebooking,
    getbooking,
    getdate
  } = require("../controllers/BookingController");



  router.post('/addbooking', async(req,res)=>{
    await bookingproprietair(req,res);
});

router.get('/getbooking', async(req,res)=>{
  await   getbooking(req,res);
});

router.post('/updatebooking/:bookingid', async(req,res)=>{
    await updatebooking(req,res);
});

/*                Filter Par Date                      */


router.get('/filterdate', async(req,res)=>{
  await   getdate(req,res);
});







module.exports = router;
