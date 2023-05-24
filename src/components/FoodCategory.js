import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CuisineTile from "./CuisineTile";
import Loading from "./Loading";

function FoodCategory ({ foods, isLoading, retrieveData }) {
  const { category } = useParams(); 
  const cuisines = foods.filter(food => food.category.toLowerCase() === category.toLowerCase());
  const navigate = useNavigate();

  return (
    <>
     {!isLoading ? 
      <>
        <h1 className="category-title">{category} Cuisines</h1>
        <div className="cuisines-main-container"> {cuisines.map(cuisine =>
          <CuisineTile 
            key={ cuisine.id } 
            cuisine={ cuisine } 
            retrieveData = {retrieveData }
          /> )}
        </div>
        <button 
          className="recipe-back-button" 
          type="button" 
          onClick={() => navigate(-1) }>⬅️ Back
        </button>
      </>
     : 
     <Loading />}
    </>
  );
}
 
export default FoodCategory;