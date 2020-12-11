const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
 
    name:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 60

    },
    
    author:{
        type: String,
        required:true,
        minlength:10,
        maxlength:60
    },

    content:{
        type:String,
        required:true,
        minlength:20,
        maxlength:500

    },

    date:{
        type:Date,
        default: Date.now
    },

    upvotes:{
        type:Number,
        default:0,
    
    },
    downvotes:{
        type:Number,
        default:0

    }
})

module.exports = mongoose.model("Post", postSchema);
