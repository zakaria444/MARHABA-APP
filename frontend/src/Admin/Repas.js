import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Repas = () => {

  const repas = useSelector((state) => state.allRepas.repas);

  if (repas.length == 0) {
    console.log("im hetete");
    return (
      <div className="loading">
    <div class="loadingio-spinner-spinner-977el9wwy2v"><div class="ldio-4j5ay0xf86g">
<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
</div></div>
      </div>
    );
  }
  // console.log("im hetete", repas);

  const renderList = repas.map((repa) => {
    const { _id, name, image_cover, prix, description } = repa;
    console.log(image_cover);
    return (
      <div className="" id="cards" key={_id}>
        <Link to={`/product/`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img
                  className="image_repas"
                  src={"http://localhost:3000/repas_image/" + image_cover}
                  alt=""
                />
              </div>
              <div className="content">
                <div className="image">{name}</div>
                <div className="image">{description}</div>
                <div className="image">$ {prix}</div>
                <div className="meta"></div>
              </div>
            </div>
          </div>
          <button className="button">
            <span>Suite</span>
            <div class="liquid"></div>
          </button>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};
export default Repas;
