import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import FoodTile from "./FoodTile";
import Loading from "./Loading";

function FoodCategory ({ foods, categories, isLoading, retrieveData }) {
  const { category } = useParams(); 
  const navigate = useNavigate();
  let filteredFoods = []
  
  
  if (!isLoading) {
    const foundCategory = categories.find(c => c.name.toLowerCase() === category.toLowerCase())
    //PREVIOUS BUG:  If category not found!
    if (!foundCategory) {
      navigate('/notfound')
    }

    filteredFoods = foods.filter(food => food.category.toLowerCase() === category.toLowerCase());

  }

  return (
    <>
     {!isLoading ? 
      <>
        <h1 className="category-title">{ category } Foods</h1>
        <div className="foods-main-container"> {filteredFoods.map(food =>
          <FoodTile 
            key={ food.id } 
            food={ food } 
            retrieveData = { retrieveData }
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