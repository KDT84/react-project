import React from "react";
import NavButtons from "./NavButtons";
import { useParams } from "react-router-dom";

const Cuisine = ({foods}) => {

  const { id } = useParams()
  const cuisine = foods.find(food => Number(food.id) === Number(id))
  
  return (
    <div>
      <h1>{cuisine.name}</h1>
      <div>
        Required Ingredients
        <ol>
          {cuisine.ingredients.map(ingredient => 
            <li key={ingredient.name}>
              {ingredient.name} - {ingredient.amount}
            </li>
          )}
        </ol>
      </div>
      <div>
        Steps to Cook
        <ol>
          {cuisine.stepsToCook.map(step => 
            <li key={step.title} >
              <h3>{step.title}</h3>
              <div>
              {step.description}
              </div>
            </li>
          )}
        </ol>
      </div>
      <NavButtons />
    </div>
  );

}
 
export default Cuisine;