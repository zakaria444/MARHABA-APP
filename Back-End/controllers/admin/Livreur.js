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



const getLivreurparid = async (req, res) => {
    const livreurId = req.params.user_id
    try {
      const Livreurs= await Livreur.findOne({ _id: livreurId }, {
       
      })
      res.status(201).json({ success: true, data: Livreurs })
    } catch (error) {
      console.log('datatatatta',Livreurs);

      res.status(409).json({ success: false, data: [], error: error })
    }
  }


module.exports = {
    getLivreur,
    acceptLivreur,
    getLivreurparid

};