const Repas = require("../models/Repas")

const getRepas = async (req, res) => {
  try {
    const repas = await Repas.find()

    res.status(200).json({ success: true, data: repas })

  } catch (error) {

    res.status(409).json({ success: false, data: [], error: error })
  }

}


const getRepasById = async (req, res) => {
  const idrepas=req.params.repasId;
  console.log(idrepas);
  try {
    const repasbyid = await Repas.findOne({_id:idrepas});
    res.status(200).json({success: true , data: repasbyid})
  }catch(error){
    res.status(404).json({success: false , data: [], error: error})
  }

}



const creatRepas = async (req, res) => {

  console.log('request',req.body);

  try {
    const name = req.body.name
    const description = req.body.description
    const prix = req.body.prix
    const newRepas = new Repas({
      name: name,
      description: description,
      prix: prix,


    })
    
      if (req.file) {

        newRepas.image_cover = req.file.originalname
    }
  
    const saveRepas = await newRepas.save()
    
    res.status(201).json({ success: true, data: saveRepas })
    

  } catch (error) {
   
        console.log(error)
        res.status(404).json({ success: false, data: [], error: error })
  }

}

const updateRepas = async (req, res) => {

  const repasId = req.params.repasId
  const { name } = req.body
  const { description } = req.body
  const { prix } = req.body

  try {
    const updatedRepasData = await Repas.updateOne({ _id: repasId }, {
      $set: {
        name: name,
        description: description,
        prix: prix,
      }

    })

    res.status(201).json({ success: true, data: updatedRepasData })

  } catch (error) {

    res.status(409).json({ success: false, data: [], error: error })

  }
}




const deletRepas = async (req, res) => {
  const repasId = req.params.repasId
  try {
    await Repas.remove({ _id: repasId })
    res.status(200).json({ success: true, data: deletrepas })
  } catch (error) {
    res.status(409).json({ success: false, data: [], error: error })
  }
}







module.exports = {
  creatRepas,
  getRepas,
  getRepasById,
  updateRepas,
  deletRepas,
};