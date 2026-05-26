import mongoose, { Mongoose } from "mongoose";
import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";


const connect=async()=>{
configDotenv();
const password=process.env.password;
const enc=encodeURIComponent(password);
const connect1=process.env.connect1;
const connect2=process.env.conect2;
const uri=`${connect1}${enc}${connect2}`

const p=String(`mongodb+srv://java_refresh:${enc}@cluster0.t0mdssq.mongodb.net/?appName=Cluster0`)
try{
await mongoose.connect(p)
console.log("success")
}
catch(error){
    console.log("failed")
console.log(error.message)
}

};
export default connect;