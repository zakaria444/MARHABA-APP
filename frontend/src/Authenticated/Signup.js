import './Authenticated.css';

import React, { useState } from 'react'

import { connect } from "react-redux"





function Signup(props) {

const { user , Signup } =props

const [userState, setUserstate] = useState({})

console.log(user);


























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


                    onSubmit={(event) => {
                    event.preventDefault();
                    Signup(userState);
                  }}>



        <img src="https://svgshare.com/i/Jcf.svg"alt='' />
        <h2 className="title">Sign UP</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="text" 
            className="input"
            placeholder='Username'


                onChange={(event) => {
                const Username = event.target.value;
                setUserstate({ ...userState, ...{ Username } });
              }}


            />
          </div>
        </div>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="email"
            className="input"
            placeholder='email'

            
            onChange={(event) => {
              const Email = event.target.value;
              setUserstate({ ...userState, ...{ Email } });
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
              const Password = event.target.value;
              setUserstate({ ...userState, ...{ Password } });
            }}
            
            
            />
          </div>
        </div>
       
        <input type="submit" className="btn"  defaultValue="Login" value={"SIGN UP"}/>
      </form>
      
    </div>
  </div>
</div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Signup : (userState) => {
      console.log(userState);
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Signup) ;
