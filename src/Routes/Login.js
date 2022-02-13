import React from 'react'
import '../Styles/Login.css'
import {useNavigate} from 'react-router-dom'
function Login() {
    let navigate=useNavigate();
  return (
   <div className='login'> 
        <div className='logincard'>
        <h1>Login</h1>
        <input type='email' placeholder='please enter email'/>
        <input type='password' placeholder='please enter password'/>
        <button onClick={()=>{
            navigate('/')
            alert('Login success');
        }
       }>Login</button>
        </div>
   </div>
  )
}

export default Login