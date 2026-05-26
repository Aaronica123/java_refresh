import { useState } from "react";


function Register(){
const [form,setForm]=useState({
    user_id:"",
    full_name:"",
    age:""
});

const fetch_1=async(e)=>{
    e.preventDefault();
    const resp= await fetch('',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            "user_id":form.user_id,
            "full_name":form.full_name,
            "age":form.age
        })
    });
    if(resp.ok){
        alert("successfully created");
        setForm({user_id:"",full_name:"",age:""});
    }
    else if(resp.status===400){
        alert("enter all fields")
    }
    else if(resp.status===403){
        alert("use appropraite method")
    }
    else if(resp.status===500){
        alert("server error contact admin")
    }

}
const handle=(e)=>{
    const {name,value}=e.target;
    setForm({
        ...form,
        [name]:value
    });

}
return(
    <>
    <div>
        <form action={fetch_1} >
            <div className="label">
                <label>
                User ID
            </label>
            <input type="number" placeholder="user id" required 
            name="user_id"
            value={form.user_id}
            onChange={handle}/>
            </div>
            <div className="label">
                <label>
                    Full Name
                </label>
                <input type="text" placeholder="full name" required 
                name="full_name"
                value={form.full_name}
                onChange={handle}/>
            </div>
            <div className="label">
                <label>
                    Age
                </label>
                <input type="number" placeholder="age" maxLength={2} 
                name="age"
                value={form.age}
                onChange={handle}/>
            </div>
            <div className="btn">
                <button type="submit">Submit</button>
            </div>
            
            
        </form>
    </div>
    </>
)
};
export default Register;