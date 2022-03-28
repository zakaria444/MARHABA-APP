const client = require('../models/User');




const Getallclients = async (req,res,role)=> {
    let clients = await client.find({role:role});
    return res.status(200).json({
       data:clients,
        message:"Hurray ! You ar now Get all clients .",
        success:false
      })
  };
  const getClient = async (req, res) => {
    const clientid = req.params.clientid
  
  
    try {
        const Oneclient = await client.find({ _id: clientid })
        res.status(200).json({ success: true, data: Oneclient })
    } catch (error) {
        res.status(404).json({ success: false, data: [], error: error })
    }
  }

  const updateclient = async (req,res)=> {
      const idclients=req.params.clientid;
      const {name}= req.body;
      const {email}= req.body;
      const {username}= req.body;
      let newvalues = { $set: {name: name, email:email, username:username} };
    let clients = await client.updateOne({_id:idclients}, newvalues);
    return res.status(200).json({
        ...clients,
        message:"Hurray ! You ar now updat client Par ID .",
        success:false
      })
  };

  const deletclient = async (req,res)=> {
    const idclients=req.params.clientid;

    let clients = await client.deleteOne({_id:idclients});
    return res.status(200).json({
      data:clients,
        message:"Hurray ! You ar now Delet client Par ID .",
        success:false
      })
};




  module.exports = {

    Getallclients ,
    updateclient  ,
    deletclient,
    getClient,
    
   };