import './Authenticated.css';

import React, { useState }  from 'react'

import Axios from 'axios';

import jwtdecode from "jwt-decode";


function Signin() {

  const URL = "http://localhost:80/api/users/login-admin" ;
  const [userState, setUserstate] = useState({})


  const submit = (e) => {
    e.preventDefault();
    Axios.post(URL, {
      username: userState.username,
      password: userState.password,
    }).then((res) => {
      localStorage.setItem('token',res.data.token)
      const jwt =  localStorage.getItem('token');
      const JWT1 =jwtdecode(jwt);
      console.log('jwt parse',JWT1.role);


if(JWT1.role==="livreur"){
    
    window.location="/dashbordlivreur"

}else if(JWT1.role==="user"){

    window.location="/dashborduser"
}else{
    window.location="/dashbordadmin"
}
     
      
    });
    
  };


  return (
    <div className="App">
   <div>
  <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png"  alt=''/>
  <div className="containerr">
    <div className="img">
      <img src="http://localhost:3000/img/Capture_prev_ui.png"alt='' />
    </div>
    <div className="login-content">
      <form action="index.html"
      
      
      onSubmit={submit}
      >
      
        <img src="https://svgshare.com/i/Jcf.svg"alt='' />
        <h2 className="title">Sign In</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="text"
            className="input"
            placeholder='username'


            onChange={(event) => {
              const username = event.target.value;
              setUserstate({  ...{ username } });
            }}
            
            
            />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <input type="password" 
            className="input" 
            placeholder='password'

            
            onChange={(event) => {
              const password = event.target.value;
              setUserstate({ ...userState, ...{ password } });
            }}
            
            />
          </div>
        </div>
       
        <input type="submit" className="btn"  defaultValue="Login" value={"SIGN IN"}/>
      </form>
      
    </div>
  </div>
</div>

    </div>
  );
}

export default Signin;
