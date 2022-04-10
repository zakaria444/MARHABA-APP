import React from "react";

import { useSelector } from "react-redux";

const Repas = () => {

    const repas = useSelector((state)=>state.allRepas.repas)
    
    console.log('repas',repas);

    return(

        <div>
            <h1>Repas</h1>
        </div>

    );

};
export default Repas
