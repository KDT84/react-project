import React from "react";
import { useParams } from "react-router-dom";
import CuisineTile from "./CuisineTile";

function FoodCategory ({ foods }) {
  
  const { category } = useParams() //destructure category. useParamas gets the Id of the 

  const cuisines = foods.filter(food => food.category === category)

  return (
    <>
      <h1 className="category-title">{category} Cuisines</h1>
      {cuisines.map(cuisine =>
        <CuisineTile key={ cuisine.id } cuisine={ cuisine }/>
      )}
      
    </>
  );
}
 
export default FoodCategory;