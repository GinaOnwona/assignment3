const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    firstName:{
        type:String,
        required:true,

    },
    
    lastName:{
        type:String,
        required:[true,'Lastname is required'],

    },
    // name:{
    //     type:String,
    //     required:true,
    //     minlength: 5,
    //     maxlength: 60

    // },
    
    username:{
        type: String,
        required:true,
        
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    passwordHash:{
        type:String,
        required:true
    },

    phonenumber:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true
    },

    // companyname:{
    //     type:String,
    //     required:true

    // }
})
// // dont want to show password ,_id,__v
// userSchema.set('toJSON', {
//     transform:(doc,user)=>{
//         user.id=user_id.toString()
//         delete user._id
//         delete user.__v
//         delete user.password 

//     }
// })
let User = mongoose.model("Users",userSchema);

module.exports = User
