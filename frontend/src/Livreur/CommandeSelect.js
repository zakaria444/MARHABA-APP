import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";


const CommandeSelect = () => {




  const { user_id } =    useParams();

  const url_order_id ="http://localhost:80/api/livreur/order_delivery_id/"+user_id;


  const [CommandDD, setCommand] = useState([]);


  const fetchCommandidlivreur = async () => {
    const response = await axios.get(url_order_id).then((res) => {
      console.log("respons", res.data.data);
      setCommand(res.data.data)
    });


  };





  /*                    UseEffect                                */
  useEffect(() => {
    console.log("statelivreur", CommandDD);
    fetchCommandidlivreur();
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
      const { _id, adress, status, } = commandList;
      if(commandList.status==='new'){
      return (
        <div className="" id="cards" key={_id}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
        
              </div>
              <div className="content">
                <div className="image">
                  <h3>Prix :</h3> {adress}
                </div>
             
                <div className="image">
                  <h3>Total :</h3>$ {status}
                </div>

                <h1 class="penTitle">Pure CSS Timeline Interface</h1>
<ol class="timeline">
  <li>STEP 1</li>
  <li>STEP 2</li>
  <li>STEP 3</li>
</ol>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
        return (
            <div className="" id="cards" key={_id}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
            
                  </div>
                  <div className="content">
                    <div className="image">
                      <h3>Prix :</h3> {adress}
                    </div>
                 
                    <div className="image">
                      <h3>Total :</h3>$ {status}
                    </div>
    
                    <h1 class="penTitle">Pure CSS Timeline Interface</h1>
<ol class="timeline">
  <li>STEP 1 </li>
  <li>STEP 2 </li>
  <li>STEP 3</li>
</ol>
                  </div>
                </div>
              </div>
            </div>
          );
        
        
        }
    });

    return (
      <div>
      
        {renderList}
      </div>
    );
  }
};

export default CommandeSelect;
