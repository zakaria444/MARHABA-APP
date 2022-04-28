import "./admin.css";

import React, { useEffect ,useState  } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setRepas } from "../redux/actions/repasActions";





import axios from "axios";

import Repas from "./Repas";

function Dashbordadmin() {
  const [values, setvalues] = useState([]);

  const [file, setFiles] = useState("");


  const AllReapas = useSelector((state) => state);

  console.log("Repas Reduser", AllReapas);

  const dispatch = useDispatch();

  const url = "http://localhost:80/api/admin";

  const urladdreapas = "http://localhost:80/api/admin/add";


  const repas = async () => {
    const showrepas = await axios
      .get(url)
      .catch((err) => {
        console.log("error", err);
      });

      if (showrepas) {
        dispatch(setRepas(showrepas.data.data));
        console.log('showrepas api : ' , showrepas );
     
      }
  };

  const submit = (e) => {
    e.preventDefault();
   
    console.log('file image',file);
    console.log('values',values);

   
  
    const form_data = new FormData();
    form_data.append("image",file)
    form_data.append("name",values.name)
    form_data.append("description",values.description)
    form_data.append("prix",values.prix)

    

 
    axios.post(urladdreapas,form_data, {
     
      headers: {
        'Content-Type': 'multipart/form-data',
    },

      
    }).then((res) => {
        
      // console.log('data repafff pokk',res);

      window.location="/dashbordadmin"

    });
  };

  const handle = (event) => {

  
    const newdata = { ...values };


    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
    

    console.log(newdata);

    const fileupload=event.target.files[0];
    setFiles(fileupload);
  


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
        <button type="button" className="" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" >
  <span class="label">🧀Ajouter repas</span>
  {/* <Link to={`/ajouter-repas`}> */}

  <span class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
  </span>
  {/* </Link> */}
</button>
<button >
  <span  class="label">🛎️Afficher Command</span>
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
<div>
  {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button> */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">New Repas</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={submit} >
            <div className="form-group">
              <label htmlFor="name" className="col-form-label">Name:</label>
              <input type="text" 
              className="form-control"
               id="name" 
               onChange={(event) => handle(event)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="description" className="col-form-label">Description:</label>
              <textarea className="form-control" 
              id="description"
               defaultValue={""}
               onChange={(event) => handle(event)}

               />
            </div>
            <div className="form-group">
              <label htmlFor="prix" className="col-form-label">Prix:</label>
              <input type="number" 
              className="form-control"
               id="prix"        
              onChange={(event) => handle(event)}
               />
            </div>
            <div className="form-group">
              <label htmlFor="image" className="col-form-label">Image:</label>
              <input type="file" className="form-control" id="image"
                onChange={(event) => handle(event)}
 />
            </div>
            <div className="modal-footer">
          <button type="submit" className="" >Submit</button>
        </div>
          </form>
        </div>
       
      </div>
    </div>
  </div>
</div>

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

      <div  id="repas_card">
        <Repas />
      </div>

    {/* <div>
  <h1>Command</h1>
  </div> 

  <div  id="repas_card">

  <Command />
   </div> */}

    </div>
  );
}


export default Dashbordadmin;
