import User_obj from "./model.js";

async function fetch(req,res){
    const data=req.body;
    const user_id=data.user_id;
    try{
        const resp=await User_obj.findOne({user_id:user_id});
        
        if(resp){
            const j=resp.toJSON();
            res.status(201).json({"message":"Success",
                "full_name":j.full_name,
                "user_id":j.user_id

            });
            console.log("user fetched")
        }
        else{
            res.status(404).json({"message":"user not found"});
            console.log("user not found")
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({"message":"Server error"});
    }
};

export default fetch;