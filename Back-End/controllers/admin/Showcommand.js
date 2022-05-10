const command = require('../models/Livreur');

const getcommand = async (req, res) => {
    try {
      const commands = await command.find().populate('user_id');
      res.status(200).json({success: true , data: commands})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }
  module.exports = {
  getcommand,    
    };