import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodTile from "./FoodTile";
import Loading from "./Loading";

function FoodCategory ({ foods, isLoading, retrieveData }) {
  const { category } = useParams(); 
  const filteredFoods = foods.filter(food => food.category.toLowerCase() === category.toLowerCase());
  const navigate = useNavigate();
  
  console.log(filteredFoods)

  return (
    <>
     {!isLoading ? 
      <>
        <h1 className="category-title">{category} Foods</h1>
        <div className="foods-main-container"> {filteredFoods.map(food =>
          <FoodTile 
            key={ food.id } 
            food={ food } 
            retrieveData = {retrieveData }
          /> )}
        </div>
        console.log(food)
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