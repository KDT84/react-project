import React from "react";
import { useNavigate } from "react-router-dom";

function CuisineTile ({cuisine}) {
  const navigate = useNavigate()
  
  function backButton() {
    navigate(`/foods/${cuisine.id}`)
  }

  return (
    <>
      <div key={cuisine.id} className="cuisine-container">
        <p className="cuisine-name">{cuisine.name}</p>
        <img className="cuisine-image" src={cuisine.image} /> <br />
        <button className="ingredients-button" onClick={backButton}>Ingredients</button>
        <div>
          <button>{cuisine.upvotes} 👍</button>
          <button>{cuisine.downvotes} 👎 </button>
        </div>
      </div>
      
    </>
  );
}
 
export default CuisineTile;