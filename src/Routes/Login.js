import React, { useState } from "react";
import "../Styles/Login.css";

import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const log=(e)=>{
    e.preventDefault();
    console.log('logged success');
  }
  return (
    <div className="login">
      <div className="logincard">
        <h1 >Login</h1>
        
        <input type="email" placeholder="please enter email" onChange={(e)=>{
          setEmail(e.target.value)
        }} value={email}  />
        <input type="password" placeholder="please enter password"  onChange={(e)=>{
          setPassword(e.target.value)
        }} value={password}/>
        <button type="submit"
          onClick={() => {
            navigate("/");
            alert("Login success");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
