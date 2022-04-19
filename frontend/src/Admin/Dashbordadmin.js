import "./admin.css";

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setRepas } from "../redux/actions/repasActions";

import axios from "axios";

import Repas from "./Repas";

function Dashbordadmin() {
  const AllReapas = useSelector((state) => state);

  console.log("Repas Reduser", AllReapas);

  const dispatch = useDispatch();

  const url = "http://localhost:80/api/admin";

  const repas = async () => {
    const showrepas = await axios
      .get(url)
      .catch((err) => {
        console.log("error", err);
      });

      if (showrepas) {
        dispatch(setRepas(showrepas.data.data));
        console.log('showrepas api : ' , showrepas);
      }
  };

  useEffect(() => {
    repas();
  }, []);

  return (
    <div className="dashboradmin">
      <div className="slice">
        <div>
          <h1>Administrateur</h1>
        </div>
        <div className="btn-admin">
        <button>
  <span class="label">🧀Ajouter repas</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button>
<button>
  <span class="label">🛎️Afficher Command</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button>
<button>
  <span class="label">⌛Accepté livreur</span>
  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
</button>
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
          <h1>Administrateur</h1>
        </div>
      

      </div>
      <div id="repas_card">
        <Repas />
      </div>
    </div>
  );
}

export default Dashbordadmin;
