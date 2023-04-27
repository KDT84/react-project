import React from "react";
import { useNavigate } from "react-router-dom";
import NavButtons from "./NavButtons";

const Cuisine = ({cuisine}) => {
  const navigate = useNavigate()
  
  function backButton() {
    navigate(`/foods/${cuisine.id}`)
  }

  return (
    <div key={cuisine.id}>
      <h1>{cuisine.name}</h1>
      <img src={cuisine.image} /> <br />
      <button onClick={backButton}>Ingredients</button>
      <button type="button" onClick={() => navigate(-1) } >back</button>
    </div>
  );
}
 
export default Cuisine;