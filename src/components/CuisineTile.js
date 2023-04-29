import React from "react";
import { useNavigate } from "react-router-dom";

function CuisineTile ({cuisine, upVote, downVote}) {
  const navigate = useNavigate()
  
  function handleIngredients() {
    navigate(`/foods/${cuisine.id}`)
  }

  function handleUpVote() {
    upVote(cuisine)
  }

  function handleDownVote() {
    downVote(cuisine)
  }

  return (
    <>
      <div key={cuisine.id} className="cuisine-container">
        <p className="cuisine-name">{cuisine.name}</p>
        <img className="cuisine-image" src={cuisine.image} /> <br />
        <button className="ingredients-button" onClick={handleIngredients}>Ingredients</button>
        <div>
          <button className="votes-btn" onClick={handleUpVote} >{cuisine.upVotes} 👍</button>
          <button className="votes-btn" onClick={handleDownVote}>{cuisine.downVotes} 👎 </button>
        </div>
      </div>
    </>
  );
}
 
export default CuisineTile;