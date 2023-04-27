import React from "react";
import { useParams } from "react-router-dom";
import CuisineTile from "./CuisineTile";

function FoodCategory ({foods}) {

  const { category } = useParams()
  const cuisines = foods.filter(food => food.category === category)

  return (
    <>
      <h1>All things {category}</h1>

      {cuisines.map(cuisine =>
        <CuisineTile key={ cuisine.id } cuisine={ cuisine }/>
      )}
      
    </>
  );
}
 
export default FoodCategory;