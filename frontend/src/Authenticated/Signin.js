import './Authenticated.css';
import React from 'react'

function Signin() {
  return (
    <div className="App">
   <div>
  <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png"  alt=''/>
  <div className="containerr">
    <div className="img">
      <img src="http://localhost:3000/img/Capture_prev_ui.png"alt='' />
    </div>
    <div className="login-content">
      <form action="index.html">
        <img src="https://svgshare.com/i/Jcf.svg"alt='' />
        <h2 className="title">Sign In</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <h5>Username</h5>
            <input type="text" className="input" />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            <h5>Password</h5>
            <input type="password" className="input" />
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
