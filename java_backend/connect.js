import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";


configDotenv();
const pass=process.env.password;
const con1=process.env.connect1;
const con2=process.env.connect2;
const enc=encodeURIComponent(pass)
const uri=`${con1}${enc}${con2}`
const fetch=new MongoClient(uri);
async function Connect(){
    try{           
         await fetch.connect();       
        
        console.log("Success")
    }
    catch{
  console.error();
    };
};
export default Connect;

