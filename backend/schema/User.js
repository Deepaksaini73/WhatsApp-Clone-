import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    iss:{
        type:String
    },
    azp:{
        type:String
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required : true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    nbf:{
        type:Number
    },
    name:{
        type:String,
        required : true
    },
    picture:{
        type:String
    },
    given_name:{
        type:String
    },
    familt_name:{
        type:String
    },
    iat:{
        type:Number
    },
    exp:{
        type:Number
    },
    jti:{
        type:String
    }

})

const User = mongoose.model('user',UserSchema);

export default User;