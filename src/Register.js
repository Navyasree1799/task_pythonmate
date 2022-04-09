import { useForm ,useEffect} from "react-hook-form";
import React,{useState} from "react";
import './App.css';
import axios from "axios";
import Loginpage from "./Loginpage";
import { Link,useNavigate } from "react-router-dom";


function Register() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const navigate=useNavigate();


 const Apicall=(userData)=>{
  axios.post(`http://13.127.127.40/api/user/
  `,userData,{
    headers:{ 'Content-Type': 'application/json'}
  })
  .then(response=>{
      
      if(response.data.message=="A user with the email already exist!")
    {
        alert("user already exist")
        navigate("/login")
    }
    else{
        alert(response.data.message)
    }
  })
  .catch(error=>console.log(error))
  console.log(userData)

 }
 
 
  return (
    <div style={{padding:"5vw"}}>
     <form onSubmit={handleSubmit(Apicall)}>
      <label>
        <p style={{margin:"5px"}}>First Name:</p>
        <input {...register("first_name",{ required: true, maxLength: 20 })}/>
        {errors.first_name?.type === 'required' && "First Name is required"}
      </label><br/>
      <label>
        <p style={{margin:"5px"}}>Last Name:</p>
        <input {...register("last_name",{ required: true, maxLength: 20 })}/>
        {errors.last_name?.type === 'required' && "Last Name is required"}
      </label><br/>
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
  
     <p style={{margin:"5px"}}><input type="submit"   /> </p>
             <Link to="/login">alredy have an account?login</Link>
      </form>
      
      </div>
   
  );
}

export default Register;
