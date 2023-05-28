const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    surname:{type:String,required:true},
    email: { type: String, required: true },
    occupation:{type:String,enum:['Farmer','Admin'],default:'Farmer',required:true},
    country:{type:String,required:true},
    city:{type:String,required:true},
    password: { type: String, required: true },
        
    },{
        timestamps: true,
        versionKey:false
    });

    module.exports = mongoose.model('User',userSchema);