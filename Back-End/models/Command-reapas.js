const mongoose = require("mongoose");
const CommandrepasSchema = mongoose.model(
    "Command-repas",
    new mongoose.Schema({
        total: {
                        type: Number,
                        required: true,
                    },
                    quntity: {
                        type: Number,
                        required: true
                    },
                  
                    prix: {
                        type: Number,
                        required: true      
                      },
            
                        command_id: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Command'
                        },
                        repas_id: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Repas'
                        },
        
    },
        { timestamps: true })
);

module.exports = CommandrepasSchema;

