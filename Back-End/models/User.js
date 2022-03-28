const {Schema, model}= require('mongoose');
const UserSchema = new Schema (
    {
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
      
    },
   
);
module.exports = model("users",UserSchema);