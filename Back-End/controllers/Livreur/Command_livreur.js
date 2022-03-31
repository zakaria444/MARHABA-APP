const CommandRepas = require('../../models/Command-reapas');
const Command = require('../../models/Command');


const show_command_repas = async (req, res) => {
  const Idcommand= req.params.commandId;

    try {
      const command_repas = await CommandRepas.find({command_id:Idcommand}).populate('command_id').populate('repas_id');
      res.status(200).json({success: true , data: command_repas})
    }catch(error){
      res.status(404).json({success: false , data: [], error: error})
    }
  }




  

  const show_command = async (req, res) => {
  
      try {
        const command = await Command.find().populate('user_id');
    
        res.status(200).json({success: true , data: command})
    
      }catch(error){
      console.log(error);
        res.status(404).json({success: false , data: [], error: error})
      }
    }






    const order_delivery = async (req, res) => {
      const id_command= req.params.command_id
      const id_livreur=req.body.livreur_id

        try {
             await Command.updateOne({ _id: id_command  }, {
            $set: {
              livreur_id: id_livreur,
                  }
                   })
                 const command_id=  await Command.find({ _id: id_command  })
        
              res.status(200).json({success: true , data: command_id})
      
        }catch(error){
        console.log(error);
          res.status(404).json({success: false , data: [], error: error})
        }
      }
    







  module.exports = {
    show_command_repas,
    show_command,
    order_delivery,

 
    
    };