import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Cuisine ({ foods, isLoading, setGroceryList }) {
  const { id } = useParams()
  const cuisine = foods.find(food => Number(food.id) === Number(id))
  const navigate = useNavigate()

  function addGroceryListHandler() {
    setGroceryList(cuisine.ingredients.map(item => `${ item.name } - ${ item.amount }`))
    navigate('/groceryList')
  }
  
  return (
    <>
      {
        !isLoading ? 
        <>
          <div className="cuisine-recipe-main-container">
            <h1 className="cuisine-recipe-header">{ cuisine.name } Recipe</h1>
            <div className="printnaddbtns">
              <button 
                className="cuisine-print-btn no-print" 
                onClick={() => window.print()}>🖨️ Print
              </button>
              <button 
                className="cuisine-add-btn no-print" 
                onClick={ addGroceryListHandler }>+ Add to GroceryList
              </button>
            </div>
            <div className="recipe-container">
              <h1 className="recipe-and-steps-title">Ingredients:</h1>
              <ul className="ul-list-ingredients">{cuisine.ingredients.map(ingredient => 
                <li key={ingredient.name}>{ingredient.name} → {ingredient.amount}.</li>
                )}
              </ul>
              <h1 className="recipe-and-steps-title">Steps to Cook:</h1>
              <ul className="ul-list-steps">{cuisine.stepsToCook.map(step => 
                <li key={step.title} >
                  <span className="step-title">{ step.title }</span>
                  <ul className="step-description"><li>{ step.description }</li></ul>
                </li>
                )}
              </ul>
              <h1 className="prep-cook-time"> Prep ⏰: { cuisine.prepTime } / Cook ⏰: { cuisine.cookTime } </h1>
            </div>
            <button className="cuisine-back-button no-print" onClick={() => navigate(-1) }>⬅️ Back</button>
            <button className="cuisine-home-button no-print" onClick={() => navigate("/") }>🏡 Home</button>
        </div>
      </>
      : 
      <Loading />
    }
  </>
);
}
 
export default Cuisine;