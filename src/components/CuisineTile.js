import React from "react";
import { useNavigate } from "react-router-dom";

function CuisineTile ({ cuisine, upVote, downVote }) {
  const navigate = useNavigate()
  
  function handleIngredients() {
    navigate(`/foods/${cuisine.id}`)
  }

  return (
    <>
      <div key={ cuisine.id } className="cuisine-container">
        <p className="cuisine-tile-name">{ cuisine.name }</p>
        <img className="cuisine-tile-image" src={ cuisine.image } alt={cuisine.name + cuisine.iamge}/> <br />
        <button className="recipe-tile-button" onClick={ handleIngredients }>📕 Recipe</button>
        <div>
          <button className="votes-btn" onClick={() => upVote(cuisine)} >{ cuisine.upVotes } 👍</button>
          <button className="votes-btn" onClick={() => downVote(cuisine) }>{ cuisine.downVotes } 👎</button>
        </div>
      </div>
    </>
  );
}
 
export default CuisineTile;