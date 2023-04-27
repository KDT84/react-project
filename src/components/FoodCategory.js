import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CuisineTile from "./CuisineTile";

function FoodCategory ({ foods }) {
  
  const { category } = useParams() //destructure category. useParamas gets the category name of the 
  const cuisines = foods.filter(food => food.category === category)
  const navigate = useNavigate()

  return (
    <>
      <h1 className="category-title">{category} Cuisines</h1>

      <div className="cuisines-main-container">
      {cuisines.map(cuisine =>
        <CuisineTile key={ cuisine.id } cuisine={ cuisine }/>
      )}
      </div>
      <button className="ingredients-back-button" type="button" onClick={() => navigate(-1) } >Back</button>
    </>
  );
}
 
export default FoodCategory;