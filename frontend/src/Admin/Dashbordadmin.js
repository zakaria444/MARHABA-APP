import  './admin.css'

import React , {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { setRepas } from '../redux/actions/repasActions'

import axios from 'axios'

import  Repas  from './Repas'


function Dashbordadmin() {

    const AllReapas =useSelector((state) => state);

    console.log('Repas Reduser',AllReapas);

    const dispatch = useDispatch();

    const url ="http://localhost:80/api/admin";

    const repas = async ()=>{

    const showrepas = await axios.get(url)

    .catch((err) => {

     console.log('error',err);

    });

    dispatch(setRepas(showrepas.data.data));
};

    useEffect(()=>{

    repas()

    },[]);

  return (
   <div className='dashboradmin'>
       <Repas/>
<h1>Dashbordadmin</h1>
</div>

  );
}

export default Dashbordadmin;
