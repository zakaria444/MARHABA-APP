const mongoose = require("mongoose");
const CommandSchema = mongoose.model(
    "Command",
    new mongoose.Schema({
        adress: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default:"new"
        },
      
        total: {
            type: Number,
            default: 0
          },

            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            livreur_id: {
                type: mongoose.Schema.Types.ObjectId,
                default:null,
                ref: 'User'
            },
        
    },
        { timestamps: true })
);

module.exports = CommandSchema;