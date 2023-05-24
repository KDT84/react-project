import React from "react";
import { useNavigate } from "react-router-dom";

const foodsUrl = "http://localhost:3000/foods"

function FoodTile ({ food, retrieveData }) {
  const navigate = useNavigate()

  function handleRecipe() {
    navigate(`/foods/${food.id}`)
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
      <div key={ food.id } className="food-container">
        <p className="food-tile-name">{ food.name }</p>
        <img className="food-tile-image" src={ food.image } alt={food.name + food.image}/> <br />
        <button className="recipe-tile-button" onClick={ handleRecipe }>📕 Recipe</button>
        <div>
          <button className="votes-btn" onClick={() => upVote(food)} >{ food.upVotes } 👍</button>
          <button className="votes-btn" onClick={() => downVote(food) }>{ food.downVotes } 👎</button>
        </div>
      </div>
    </>
  );
}
 
export default FoodTile;