import User_obj from "./model.js";
async function delete_1(req,resp){
    const data=req.body;
    const user_id=data.user_id;
    try{
        const user=await User_obj.findOneAndDelete({ user_id:user_id});

        if(user){
            const j=user.toJSON();
            console.log("user found");
            resp.status(200).json({"message":"User found",
                "full_name":j.full_name
            });
        }
        else{
            console.log("not found");
            resp.status(403).json({"message":"User not found"})
        }
    }
    catch(error){
        console.log(error.message);
        resp.status(500).json({"message":"server error"})
    }
};
export default delete_1;
