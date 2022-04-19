import './Authenticated.css';

import React, { useState } from 'react'

import Axios from 'axios';

import { Link } from "react-router-dom";


// import { connect } from "react-redux"

// import { RegisterAuthAction } from "../redux/actions/AuthAction";





function Signup() {


const [userState, setUserstate] = useState({})

console.log(userState);


 const URL = "http://localhost:80/api/users/register-user" ;

const submit = (event) =>{
  
    event.preventDefault();


    Axios.post(URL, {
      username: userState.username,
      email: userState.email,
      password: userState.password,
    }).then((res) => {
        
      console.log('respons',res.data);

      window.location="/signin"
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


                    onSubmit={submit}>



        <img src="https://svgshare.com/i/Jcf.svg"alt='' />
        <h2 className="title">Sign UP</h2>
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
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            <input type="email"
            className="input"
            placeholder='email'

            
            onChange={(event) => {
              const email = event.target.value;
              setUserstate({ ...userState, ...{ email } });
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
       
        <input type="submit" className="btn"  defaultValue="Login" value={"SIGN UP"}/>
        <h3>if you are livreur</h3>
        <Link to={`/signup-livreur`}>
        <input type="text" className="btn" id='Signup-Livreur' value={"Signup Livreur"} />
        </Link>
      </form>

    </div>
  </div>
</div>

    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     user: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     Signup : (userState) => {

// dispatch(RegisterAuthAction(userState))    

// },
//   };
// }

export default Signup ;
