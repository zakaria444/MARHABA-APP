const Livreur = require("../../models/User")

const getLivreur = async (req, res) => {
  try {
    const livreur = await Livreur.find()
    res.status(200).json({ success: true, data: livreur })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}

const acceptLivreur = async (req, res) => {
    const livreurId = req.params.livreurId
   
  
  
    try {
      const updatedStatusLivreur= await Livreur.updateOne({ _id: livreurId }, {
        $set: {
            status: "accept" ,
   
        }
      })
      res.status(201).json({ success: true, data: updatedStatusLivreur })
    } catch (error) {
      res.status(409).json({ success: false, data: [], error: error })
    }
  }


module.exports = {
    getLivreur,
    acceptLivreur

};