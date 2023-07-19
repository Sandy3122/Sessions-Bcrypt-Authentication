const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const userSchema = new Schema({
    username : {
        type: String,
        required: true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
        },
    password:{
        type:String,
        minlength:[6,"Password should be at least 6 characters long"],
        // maxlength:[20,"Password cannot exceed more than 20 character"],
        //required: [false,'Please provide a valid Password']
        require:true
    }

});


module.exports = mongoose.model("User", userSchema);