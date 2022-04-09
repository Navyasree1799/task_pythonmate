import { useForm ,} from "react-hook-form";
import React from "react";
import './App.css';
import axios from "axios";
import { Link, } from "react-router-dom";



const Loginpage=()=>{
const { register, handleSubmit,formState: { errors } } = useForm();

const loginApicall=(userData)=>{
    console.log(userData)
    axios.post(`http://3.140.210.76:8000/api/token/
    `,userData,{
      headers:{ 'Content-Type': 'application/json'}
    })
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    console.log(userData)
  
   }
return(
    
 <div style={{padding:"5vw"}}>
     <form onSubmit={handleSubmit(loginApicall)}>
      <label>
       <p style={{margin:"5px"}}> Email:</p>
        <input {...register("email",{ required: true, maxLength: 20 })}/>
        {errors.email?.type === 'required' && " email is required"}
      </label><br/>
      <label>
       <p style={{margin:"5px"}}>Password:</p>
        <input type="password" {...register("password",{ required: true })}/>
        {errors.password?.type === 'required' && " password is required"}
      </label><br/>
    {/* <span>{counter++}</span> */}
     <p style={{margin:"5px"}}><input type="submit" 
    //  onClick= {()=>{
    //            firstApi()
    //          }} 
             />
             </p>
             <Link to="/register">Don't have an account?please register</Link>
      </form>
      </div>
   
  );
    

}

export default Loginpage;