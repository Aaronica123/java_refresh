import connect from "./db.js";
import app from './app.js';

async function start(){
    try{
        await connect();
        const p=3001
    app.listen(p,()=>{
        console.log(`server started ${p}`)
    })

    }
    
    catch(error){
        console.log(error.message)
    }
};
start();