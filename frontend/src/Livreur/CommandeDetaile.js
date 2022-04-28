import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import jwtdecode from "jwt-decode";


const CommandeDetaile = () => {

  const jwt =  localStorage.getItem('token');

  const JWT1 =jwtdecode(jwt);

  const id_livreur1 = JWT1.user_id;

  const { command_id } =    useParams();

  const url_accept ="http://localhost:80/api/livreur/order_delivery/"+command_id;

  


  const [CommandDD, setCommand] = useState([]);




  console.log("idcommand detail", command_id);

  const fetchCommandDetail = async () => {
    const url = `http://localhost:80/api/livreur/show_command_repas/${command_id}`;

    const response = await axios.get(url).catch((err) => {
      console.log("error", err);
    });
    const Commanddetail1 = response.data.data;

    console.log("response", CommandDD);

    setCommand(Commanddetail1);
  };



  const choose = (event) =>{
      console.log('hello' ,id_livreur1);



      axios.post(url_accept, {
        livreur_id: id_livreur1,
        
      }).then((res) => {
            
        window.location="/dashbordlivreur"
  
      });
  }

  /*                    UseEffect                                */
  useEffect(() => {
    console.log("state", CommandDD);
    fetchCommandDetail();
  }, []);

  if (CommandDD.length === 0) {
    return (
      <div className="loading">
        <div class="loadingio-spinner-spinner-977el9wwy2v">
          <div class="ldio-4j5ay0xf86g">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  } else {
    const renderList = CommandDD.map((commandList) => {
      const { _id, prix, total, repas_id, command_id } = commandList;

      return (
        <div className="" id="cards" key={_id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  className="image_repas"
                  src={
                    "http://localhost:3000/img/"+ repas_id.image_cover
                  }
                  alt=""
                />
              </div>
              <div className="content">
                <div className="image">
                  <h3>Prix :</h3> {repas_id.prix}
                </div>
             
                <div className="image">
                  <h3>Total :</h3>$ {total}
                </div>

                <div className="image">
                  <h3>Adress :</h3>
                  {command_id.adress}
                </div>
                <div className="image">
                  <h3>status :</h3>
                  {command_id.status}
                </div>
                <div className="image">
                  <h3>status :</h3>
                  {repas_id.description}
                </div>
                <div className="image">
                  <h3>Name Repas :</h3>
                  {repas_id.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <button onClick={choose}  className="button">
            <span>choose this command</span>
            <div class="liquid"></div>
          </button>
        {renderList}
      </div>
    );
  }
};

export default CommandeDetaile;
