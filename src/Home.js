
import React from "react";
import './App.css';
import { Link } from "react-router-dom";



function Home() {
  
 
  return (
    <div style={{padding:"5vw"}}>
  
      <Link  to="/login"  >
          <button>Login</button>
    
    </Link>
    <Link to="/register" >
    <button>Register</button>
    </Link>
     
     
      </div>
   
  );
}

export default Home;
