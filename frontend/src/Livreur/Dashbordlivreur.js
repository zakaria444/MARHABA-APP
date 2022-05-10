
import React, { useEffect,useState } from "react";

import axios from "axios";

import jwtdecode from "jwt-decode";

import { Link } from "react-router-dom";



import Command from "./Commande";



function Dashbordlivreur() {
  const [status,setstatus] = useState([])

  const jwt =  localStorage.getItem('token');

  const JWT1 =jwtdecode(jwt);




  const user_id= JWT1.user_id;

  const url_liv = "http://localhost:80/api/admin/getLivreur/"+user_id;



  const livreur = async () =>{
    console.log('token',JWT1.user_id);
    const getlivreur = await axios
    .get(url_liv)
    const statuslivreur =getlivreur.data.data;
    setstatus(statuslivreur)
    console.log('getlivreur',status);
 
  }
  

  useEffect(() => {
    livreur()
  }, []);

  if(status.status==='pending' && status.role==='livreur' ){
    return(
      <div >
        <h1 className="pending">Wait until you are accepted by Admin (24h)</h1>
    <div className="loading">
      
    <div class="loadingio-spinner-spinner-977el9wwy2v">
      <div class="ldio-4j5ay0xf86g">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div>

</div>
      </div>
      </div>
    );

  }

  
else{
  return (
    <div className="dashboradmin">
      <div className="slice">
        <div>
          <h1>Delivery administrator </h1>
        </div>
        <div className="btn-admin">
        <Link to={`/commandselect/${user_id}`}  >
        <button>
      
  <span class="label">🧀Command Select</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>


</button>
  </Link>
<button>
  <span class="label">🪁Informations</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button>
<button>
  <span class="label">🪁Next</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button>

</div>
        <div>
          <h1>Delivery administrator</h1>
        </div>
      

      </div>
      <div id="repas_card">
          <Command/>
      </div>
    </div>
  );
};
}

export default Dashbordlivreur;

