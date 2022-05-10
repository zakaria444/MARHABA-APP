import React, { useEffect ,useState  } from 'react'

import axios from "axios";



function Livreur() {
    const url_livreur ="http://localhost:80/api/admin/getLivreur";

    const [livreurs, setlivreur] = useState([]);


    const livreur = async()=>{

        await axios
           .get(url_livreur)
           .then((res) => {
             setlivreur(res.data.data)
           });
     

     
       };

       const deletliv =(id)=>{
        console.log('id livreur2',id);
      }
       useEffect(() => {
        livreur()
      }, []);


       const renderList = livreurs.map((livreurList) => {
        const { _id,  status, username ,email    } = livreurList;
        
              if (status==='pending') {
                  
              
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
                    <div className="image"><h3>UserName  :</h3> {username}</div>
                    <div className="image"><h3>Status  :</h3>{status}</div>    
                    <div className="image"><h3>Email  :</h3>{email}</div>    
                  </div>
                </div>
                <button
          className="button">
            <span>Accept </span>
            <div class="liquid"></div>
          </button>
          <button
          onChange={deletliv({_id})}
          className="button">
            <span>Delet </span>
            <div class="liquid"></div>
          </button>
              </div>
         
              
          </div>
        );
    }
    else{
        return(
        <div className="acc" id="" key={_id}>
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
              <div className="image"><h3>UserName  :</h3> {username}</div>
              <div className="image"><h3>Status  :</h3>{status}</div>    
              <div className="image"><h3>Email  :</h3>{email}</div>    
            </div>
            <button
          className="button">
            <span>Delet </span>
            <div class="liquid"></div>
          </button>
          </div>
          
        </div>
       
        
    </div>
    )
    }
      
    
    }) ; 
    
      return (

        <div className="acc">
          {renderList}
        </div>
      ) ;
    };

export default Livreur