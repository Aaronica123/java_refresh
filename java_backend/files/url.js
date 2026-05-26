import app from "./app.js";
import create from "./view.js";


function url(){
    app.post('/create',create)

}
export default url;