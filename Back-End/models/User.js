
const mongoose = require("mongoose");
const UserSchema = mongoose.model(
    "User",
    new mongoose.Schema({
        email:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:"user",
            enum:["user","livreur", "admin"]
        },
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:"pending",
            enum:["pending","accept"]      
          },
      
   
        
    },
        { timestamps: true })
);

module.exports = UserSchema;

