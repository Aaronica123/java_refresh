import { useState } from "react";

function Delete(){
    const [form,setForm]=useState({
        user_id:""
    });
    const handle=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    const del=async(e)=>{
        e.preventDefault();
        try{
            const resp=await fetch('/api/delete',{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "user_id":form.user_id
            })
        })
        if(resp.ok){
            alert("user deleted");
            setForm({user_id:""})
        }
        else if(resp.status===400){
            alert ("enter all fields")
        }
        else if (resp.status===403){
            alert("missing cors or check body")
        }
        else if(resp.status===500){
            alert("server error")
        }
        }
        catch(error){
            alert(error.message)
        }
        
    }
return (
    <>
    <div>
        <form action={del} >
            <div className="label">
                <label>
                User ID
            </label>
            <input type="number" name="user_id" value={form.user_id} onChange={handle}/>
            </div>
            <div className="btn">
            <button type="submit" onClick={del}>
                Delete
            </button>
            </div>
            
            
        </form>

    </div>
    </>
)
}
export default Delete;