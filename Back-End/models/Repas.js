const { Schema,model } = require('mongoose');
const RepasSchema = new Schema   (
    {

        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
      
        prix: {
            type: Number,
            required: true
        },

        image_cover: {
            type: String,
            required: true
        },
   
 
    },

);
module.exports = model("Repas", RepasSchema);