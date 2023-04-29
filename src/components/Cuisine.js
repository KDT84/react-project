import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import GroceryList from "./GroceryList";

function Cuisine ({foods, isLoading, setGroceryList}) {

  const { id } = useParams()
  const cuisine = foods.find(food => Number(food.id) === Number(id))
  const navigate = useNavigate()

  function addGroceryListHandler() {
    setGroceryList(cuisine.ingredients.map(item => `${item.name} - ${item.amount}`))
    navigate('/groceryList')
  }
  
  return (
    <>
      {
        !isLoading ? 
        <>
          <div className="cuisine-ingredients-main-container">
          <h1 className="cuisine-ingredients-header">{cuisine.name} Recipe</h1>
          <div className="printnaddbtns">
            <button className="print cuisine-print-button no-print" onClick={() => window.print() }>🖨️ Print</button>
            <button className="addbtn cuisine-print-button no-print" onClick={addGroceryListHandler}> + Add to GroceryList</button>
          </div>
            <div className="required-ingredients-container">
              <h1 className="ingredients-and-steps-title">Ingredients:</h1>
              <ul className="ul-list-ingredients">
                {cuisine.ingredients.map(ingredient => 
                  <li key={ingredient.name}>
                    {ingredient.name} - {ingredient.amount}
                  </li>
                )}
              </ul>
              <h1 className="ingredients-and-steps-title">Steps to Cook:</h1>
              <ul className="ul-list-steps">
                {cuisine.stepsToCook.map(step => 
                  <li key={step.title} >
                    <span>{step.title}</span>
                    <ul>
                      <li>{step.description}</li>
                    </ul>
                  </li>
                )}
              </ul>
              <h1 className="prepCookTime"> Prep Time: {cuisine.prepTime} / Cook Time: {cuisine.cookTime} </h1>
            </div>
              <button className="cuisine-back-button no-print" onClick={() => navigate(-1) }>↩ Back</button>
              <button className="cuisine-home-button no-print" onClick={() => navigate("/") }>🏡 Home</button>
          </div>
        </>
        : <Loading />
      }
    </>
  );
}
 
export default Cuisine;