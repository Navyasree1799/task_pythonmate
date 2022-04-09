import { useForm ,useEffect} from "react-hook-form";
import React,{useState} from "react";
import './App.css';
import axios from "axios";
import Loginpage from "./Loginpage";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";


function App() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [firstApi,setfirstApi] = useState();
  const [data,setData]= useState([]);
//  const onSubmit = (d) =>
//  alert (JSON.stringify(d));


 const Apicall=(userData)=>{
  axios.post(`http://13.127.127.40/api/user/
  `,userData,{
    headers:{ 'Content-Type': 'application/json'}
  })
  .then(response=>console.log(response))
  .catch(error=>console.log(error))
  console.log(userData)

 }
 
 
  return (
    <div style={{padding:"5vw"}}>
    
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Loginpage/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/" element={ <Home/> } />
       
      </Routes>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
