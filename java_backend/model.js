import mongoose from "mongoose"

const User=new mongoose.Schema({
    user_id:{
        type:Number,
        index:true,
        unique:true
    },
    full_name:{
        type:String,
        nullable:false
    },
    age:{
        type:String,
        nullable:false
    }
});
const User_obj=mongoose.model("User_model",User);
export default User_obj;