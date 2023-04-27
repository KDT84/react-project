import React from "react";
import { useNavigate } from "react-router-dom";
import NavButtons from "./NavButtons";

function CuisineTile ({cuisine}) {
  const navigate = useNavigate()
  
  function backButton() {
    navigate(`/foods/${cuisine.id}`)
  }

  return (
    <>
      <div key={cuisine.id} className="cuisine-container">
        <h5 className="cuisine-name">{cuisine.name}</h5>
        <img className="cuisine-image" src={cuisine.image} /> <br />
        <button className="ingredients-button" onClick={backButton}>Ingredients</button>
      </div>
      
    </>
  );
}
 
export default CuisineTile;