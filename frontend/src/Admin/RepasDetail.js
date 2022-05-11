    import "./repasDetail.css";

    import { Link } from "react-router-dom";

    import React, { useEffect , useState } from 'react'

    import { useParams } from 'react-router-dom'

    import axios from 'axios'

    import { useDispatch, useSelector } from 'react-redux';

    import { selectedRepas } from '../redux/actions/repasActions';

    import { addToCart } from '../redux/actions/cartActions.js';

    const RepasDetail = () => {

        const repas = useSelector((state)=>state.repas);


        const {repasId} = useParams();

        const dispatch = useDispatch();

        const handleAddToCart = async  () => {


          // console.log('hellozaaria',repas);

          dispatch(addToCart(repas));
        };

        console.log(repasId);

        const [cart,SetCart] = useState([]);

        const fetchRepasDetail = async ()=>{

           const url = `http://localhost:80/api/admin/repasdetail/${repasId}`;

            const response  = await axios

            .get(url)
            .catch(err=>{

                console.log('error',err);
                
            });
            console.log(response.data.data);

           dispatch(selectedRepas(response.data.data));
        };
/*                             CartShoppinge                                          */

        const handle = () => {

          const RepasCart = { repas };

          SetCart(RepasCart)

          console.log('cart',[cart.repas]);

        };

        /*                    UseEffect                                */
        useEffect(()=>{

              fetchRepasDetail();

        },[])
        

    
            return (
              <div className="" id="cardss" >
        <Link to={`/dashbordadmin`}>

                  <button>

  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
  <span>Back</span>
  
</button>
</Link>
                  <div className="ui link cards">
                    <div className="card">
                      <div className="image">
                        <img
                          className="image_repas"
                          src={"http://localhost:3000/repas_image/" + repas.image_cover}
                          alt=""
                        />
                      </div>
                      <div className="content">
                        <div className="image">{repas.name}</div>
                        <div className="image">{repas.description}</div>
                        <div className="image">$ {repas.prix}</div>
                        <div className="meta"></div>
                      </div>
                    </div>
                    <div className="repasdet">
                    <button class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
                     <button className="repasdetail"> 
                        UpDate
                     </button>
                     </div>
                  </div>

<button  
								onClick={handleAddToCart}>

<svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
<span>Add To Cart</span>

</button>
                  
              </div>
            );
          }
        
    export default RepasDetail;
