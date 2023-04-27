import React from "react";
import NavButtons from "./NavButtons";
import { useParams, useNavigate } from "react-router-dom";

function Cuisine ({foods}) {

  const { id } = useParams()
  const cuisine = foods.find(food => Number(food.id) === Number(id))
  const navigate = useNavigate()
  
  return (
    <div className="cuisine-ingredients-main-container">
      <h1 className="cuisine-ingredients-header">{cuisine.name} Recipe</h1>

      <div className="required-ingredients-container">
        <span className="ingredients-and-steps-title">Ingredients:</span>
        <ul>
          {cuisine.ingredients.map(ingredient => 
            <li key={ingredient.name}>
              {ingredient.name} - {ingredient.amount}
            </li>
          )}
        </ul>
      
        <span className="ingredients-and-steps-title">Steps to Cook:</span>
        <ul>
          {cuisine.stepsToCook.map(step => 
            <li key={step.title} >
              <span>{step.title}</span>
              <p>
              <ul><li>{step.description}</li></ul>
              </p>
            </li>
          )}
        </ul>
      </div>
      <button className="cuisine-buttons" onClick={() => navigate(-1) }>Back</button>
      <button className="cuisine-home-button" onClick={() => navigate("/") }>Home</button>
    </div>
  );
}
 
export default Cuisine;