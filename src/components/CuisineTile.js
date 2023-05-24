import React from "react";
import { useNavigate } from "react-router-dom";

const foodsUrl = "http://localhost:3000/foods"

function CuisineTile ({ cuisine, retrieveData }) {
  const navigate = useNavigate()

  function handleRecipe() {
    navigate(`/foods/${cuisine.id}`)
  }

  function upVote(food) {
    fetch(foodsUrl + "/" + food.id, {
      method: 'PATCH', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ upVotes: food.upVotes + 1 })
    })
    .then(() => retrieveData()) 
  }

  function downVote(food) {
    fetch(foodsUrl + "/" + food.id, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ downVotes: food.downVotes + 1} )
    })
    .then(() => retrieveData()) 
  }

  return (
    <>
      <div key={ cuisine.id } className="cuisine-container">
        <p className="cuisine-tile-name">{ cuisine.name }</p>
        <img className="cuisine-tile-image" src={ cuisine.image } alt={cuisine.name + cuisine.iamge}/> <br />
        <button className="recipe-tile-button" onClick={ handleRecipe }>📕 Recipe</button>
        <div>
          <button className="votes-btn" onClick={() => upVote(cuisine)} >{ cuisine.upVotes } 👍</button>
          <button className="votes-btn" onClick={() => downVote(cuisine) }>{ cuisine.downVotes } 👎</button>
        </div>
      </div>
    </>
  );
}
 
export default CuisineTile;