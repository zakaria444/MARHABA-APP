import './NavBar.css';

import React from 'react'

import jwtdecode from "jwt-decode";

function NavigationBar() {
  const isAuthenticated =  () =>{

    const jwt =  localStorage.getItem('token');
  
    if(jwt){
      
      const JWT1 =jwtdecode(jwt);


      
      return   JWT1;
     

    }
     return false;
  }
 

  return (
   
<div>
  <header>
    <nav>
      <ul className="nav-links">
        <li><a href="http://localhost:3000">Home</a></li>
       
      </ul>
    </nav>
    <div className='nav-login'>
    <a className="cta" href="http://localhost:3000/signin"><button className='Signin'>Signin</button></a>
    <a className="cta" href="http://localhost:3000/signup"><button className='Signin'>SignUp</button></a>

    </div>
    </header>
    <a className="cta" href="#"></a>
    
    </div>




  );
}

export default NavigationBar;
