import  { useNavigate } from 'react-router-dom'

function Dashboard(){
    const nav=useNavigate();
    
    function move(c){
        const value=c;
        if(value==1){
            nav('/register')
        }
        else if(value==2){
            nav('/delete')
        }

    }
    return(
        <>
        <div className="design">
            <div className="btn">
                <button type="button" onClick={()=>move(1)}>REGISTER USER</button>
            </div>
            <div className="btn">
                <button type="button" onClick={()=>move(2)}>DELETE USER</button>
            </div>
        </div>
        </>
    )
};
export default Dashboard;