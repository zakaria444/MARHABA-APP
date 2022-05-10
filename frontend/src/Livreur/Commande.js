import React, { useEffect,useState }  from "react";

import { setcommand } from "../redux/actions/commandaction";

import axios from "axios";

import jwtdecode from "jwt-decode";

import { Link } from "react-router-dom";

import {useDispatch, useSelector } from "react-redux";

const Commande = () => {

  const [status,setstatus] = useState([])

  const jwt =  localStorage.getItem('token');

  const JWT1 =jwtdecode(jwt);

  const AllcommandReducer = useSelector((state) => state.commandReducer);

  console.log("Command Reduser ", AllcommandReducer);

  const dispatch = useDispatch();

  const url = "http://localhost:80/api/livreur/show_command";

  const user_id= JWT1.user_id;

  const url_liv = "http://localhost:80/api/admin/getLivreur/"+user_id;

  const urlpage =    window.location.href;


  const command = async () => {
    const showcommand = await axios
      .get(url)
      .catch((err) => {
        console.log("error", err);
      });

      if (showcommand) {
        dispatch(setcommand(showcommand.data.data));
        console.log('showcommand api : ' , showcommand);
      }
  };

  const livreur = async () =>{
    console.log('token',JWT1.user_id);
    const getlivreur = await axios
    .get(url_liv)
    const statuslivreur =getlivreur.data.data;
    setstatus(statuslivreur)
    console.log('getlivreur',status);
 
  }

  useEffect(() => {
    command();
    livreur()
  }, []);



  const commands = useSelector((state) => state.commandReducer);

  const ToutCommand = commands.Command;

  console.log('command js',commands.Command);

  if (commands.Command.length == 0) {
    console.log("im hetete",commands.Command);
    return (
      <div className="loading">
    <div class="loadingio-spinner-spinner-977el9wwy2v"><div class="ldio-4j5ay0xf86g">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
      </div>
    );
  }

  const renderList = ToutCommand.map((commandList) => {
    const { _id, adress, status, total, user_id ,livreur_id    } = commandList;
    if (livreur_id==null ) {
    
          
    return (
    
      <div className="" id="cards" key={_id}>
          <Link to={`/commanddetail/${_id}`}  >
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  className="image_repas"
                  src={"http://localhost:3000/command/pomodoro-delivery-logo.png"}
                  alt=""
                />
              </div>
              <div className="content">
                <div className="image"><h3>Adress  :</h3> {adress}</div>
                <div className="image"><h3>Status  :</h3>{status}</div>
                <div className="image"><h3>Total  :</h3>$ {total}</div>

                <div className="image"><h3>Name  :</h3>{user_id.username}</div>
                <div className="image"><h3>Name Livreur  :</h3>Nothing</div>

              </div>
            </div>
          </div>
          

          <button
          className="button">
            <span>More Details</span>
            <div class="liquid"></div>
          </button>
        </Link>
      </div>
    );
 
  }
else{
  return (
  
    <div className="" id="cards" key={_id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img
                className="image_repas"
                src={"http://localhost:3000/command/pomodoro-delivery-logo.png"}
                alt=""
              />
            </div>
            <div className="content">
              <div className="image"><h3>Adress  :</h3> {adress}</div>
              <div className="image"><h3>Status  :</h3>{status}</div>
              <div className="image"><h3>Total  :</h3>$ {total}</div>

              <div className="image"><h3>Name Client  :</h3>{user_id.username}</div>
              <div className="image"><h3>Name Livreur  :</h3>{livreur_id.username}</div>

            </div>
          </div>
        </div>
        

    </div>
  );
}
}) ; 

  return <>{renderList}</>;
};
export default Commande;
