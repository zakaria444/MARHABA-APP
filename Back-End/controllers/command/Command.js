const Command = require("../../models/Command")
const CommandRepas = require("../../models/Command-reapas")


const AddCommand = async (req, res) => {

  try {
    const user_id= req.params.userId
    const adress = req.body.adress

    const newCommand = new Command({
      adress: adress,
      user_id:user_id,
    })
  
    const saveCommand = await newCommand.save()
    // res.status(201).json({ success: true, data: saveCommand })

    if(saveCommand){
      const products= req.body.products

      products.map(async(reapas)=>{
      const newCommandrepas = new CommandRepas({
       
        command_id:saveCommand._id ,
        repas_id:reapas.reapas_id,
        prix : reapas.prix,
        quntity:reapas.quntity,
        total:reapas.prix * reapas.quntity
      });
      await newCommandrepas.save()
      await Command.updateOne({ _id: saveCommand._id  }, {
        $set: {
          total: reapas.prix * reapas.quntity,
        }
      })
    })


    }
  
    
    res.status(201).json({ success: true, data: "yeeeeeeeeeees" })

  } catch (error) {
   
        console.log(error)
        res.status(404).json({ success: false, data: [], error: error })
  }

}




module.exports = {
    AddCommand,
    

};