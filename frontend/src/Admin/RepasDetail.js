    import React from 'react'

    import { useParams } from 'react-router-dom'

    import axios from 'axios'

    const RepasDetail = () => {

        const {repasId} = useParams();

        console.log(repasId);

        const fetchRepasDetail = ()=>{
            url = "";
            const response  = await axios
        }

    return (
        <div>RepasDetail</div>
    );
    };
    export default RepasDetail;
