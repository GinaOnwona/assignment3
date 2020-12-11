const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    firstName:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 60

    },
    
    lastName:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 60

    },
    name:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 60

    },
    
    username:{
        type: String,
        required:true,
        minlength:10,
        maxlength:60
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    passwordHash:{
        required:true
    },

    mobilenumber:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true
    },

    companyname:{
        type:String,
        required:true

    }
})
// dont want to show password ,_id,__v
userSchema.set('toJSON', {
    transform:(doc,user)=>{
        user.id=user_id.toString()
        delete user._id
        delete user.__v
        delete user.password 

    }
})

module.exports = mongoose.model("User",userSchema);
