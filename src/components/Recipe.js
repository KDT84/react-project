import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Nopage from "./Nopage";

function Recipe ({ foods, isLoading, setGroceryList}) {
  const { id } = useParams()
  const navigate = useNavigate()
  const food = foods.find(food => Number(food.id) === Number(id))
// not found id
if (!food) {
  navigate('/notfound')
}
// -----
  
function addGroceryListHandler() {
  setGroceryList(food.ingredients.map(item => `${ item.name } - ${ item.amount }`))
  navigate('/groceryList')
}

  return (
    <>
      {
        !isLoading ? 
        <>
          <div className="food-recipe-main-container">
            <h1 className="food-recipe-header">{ food.name } Recipe</h1>
            <div className="printnaddbtns">
              <button 
                className="food-print-btn no-print" 
                onClick={() => window.print()}>🖨️ Print
              </button>
              <button 
                className="food-add-btn no-print" 
                onClick={ addGroceryListHandler }>+ Add to GroceryList
              </button>
            </div>
            <div className="recipe-container">
              <h1 className="recipe-and-steps-title">Ingredients:</h1>
              <ul className="ul-list-ingredients">{food.ingredients.map(ingredient => 
                <li key={ingredient.name}>{ingredient.name} → {ingredient.amount}.</li>
                )}
              </ul>
              <h1 className="recipe-and-steps-title">Steps to Cook:</h1>
              <ul className="ul-list-steps">{food.stepsToCook.map(step => 
                <li key={step.title} >
                  <span className="step-title">{ step.title }</span>
                  <ul className="step-description"><li>{ step.description }</li></ul>
                </li>
                )}
              </ul>
              <h1 className="prep-cook-time"> Prep ⏰: { food.prepTime } / Cook ⏰: { food.cookTime } </h1>
            </div>
            <button className="food-back-button no-print" onClick={() => navigate(-1) }>⬅️ Back</button>
            <button className="food-home-button no-print" onClick={() => navigate("/") }>🏡 Home</button>
        </div>
      </>
      : 
      <Loading />
    }
  </>
);
}
 
export default Recipe;