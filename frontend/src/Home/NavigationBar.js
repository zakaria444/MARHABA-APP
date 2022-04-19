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
  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
 

  return (
   
<div>
  <header>
  {!isAuthenticated() && (
          <>
         <nav>
      <ul className="nav-links">
        <li><a href="http://localhost:3000">Home</a></li>
       
      </ul>
    </nav>
    <div className='nav-login'>
    <a className="cta" href="http://localhost:3000/signin"><button className='Signin'>Signin</button></a>
    <a className="cta" href="http://localhost:3000/signup"><button className='Signin'>SignUp</button></a>

    </div>

         
        </>

    )}
    {isAuthenticated() && (
          <>
         <nav>
      <ul className="nav-links">
        <li><a href="http://localhost:3000">Home</a></li>
       
      </ul>
    </nav>
    <div className='nav-login'>
    <a className="cta" ><button className='Signin'>WELCOME :{ isAuthenticated().username }</button></a>
    <a className="cta" ><button className='Signin'>Role :{ isAuthenticated().role }</button></a>

    <a className="cta" onClick={signout} ><button className='Signin'>Sign out</button></a>
  

    </div>

         
        </>

    )}

   
    </header>
    <a className="cta" href="#"></a>
    
    </div>




  );
}

export default NavigationBar;
