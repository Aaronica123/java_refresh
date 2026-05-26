
import User_obj from "./model.js";

async function create(req,res){
    const data=req.body;
    const user_id=data.user_id;
    const full_name=data.full_name;
    const age=data.age;
    // const d=Date.now();
    try{
        const user=new User_obj({
        user_id:user_id,
        full_name:full_name,
        age:age
        // date_c:d
    });
    await user.save();
    
    
    console.log("success");
    res.status(200).json({"message":"success"});
    
    
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({"message":"Failed"})
    }
    
    
    
};
export default create;