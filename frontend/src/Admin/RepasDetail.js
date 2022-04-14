    import React, { useEffect } from 'react'

    import { useParams } from 'react-router-dom'

    import axios from 'axios'

    import { useDispatch, useSelector } from 'react-redux';

    import { selectedRepas } from '../redux/actions/repasActions';

    const RepasDetail = () => {

        const repas = useSelector((state)=>state.repas);

        const {repasId} = useParams();

        const dispatch = useDispatch();

        console.log(repasId);

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
        useEffect(()=>{

             fetchRepasDetail();

        },[])
        

    return (
        <div>RepasDetail</div>
    );
    };
    export default RepasDetail;
