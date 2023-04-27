import React from "react";
import { useHistory } from "react-router-dom";
import NavButtons from "./NavButtons";

const Cuisine = ({cuisine}) => {
  const history = useHistory()
  
  function onClick() {
    history.push(`/foods/${cuisine.id}`)
  }

  return (
    <div key={cuisine.id}>
      <h1>{cuisine.name}</h1>
      <img src={cuisine.image} />
      <button onClick={onClick}>Ingredients</button>
    </div>
  );
}
 
export default Cuisine;