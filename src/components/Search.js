import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search ({ foods }) {
  const [searchFood, setSearchFood ] = useState("")
  const [isFound, setIsFound] = useState()
  const navigate = useNavigate()

  function findFood () {
    const food = foods.find(food => food.name.toLowerCase() === searchFood.toLowerCase())
    if (food) {
      navigate(`/foods/${ food.id }`)
    }
    else {
      setIsFound(false)
    }
  }

  function handleChange(e) {
    setSearchFood(e.target.value)
  }
  
  return ( 
    <>
      <button className='search-btn' onClick={ findFood }>Search</button>
      <input 
        className={isFound === false ? 'search-category invalid' : 'search-category'}
        onChange={ handleChange }
        type="text" 
        value={ searchFood } 
        placeholder='Enter Recipe Name' 
      />
    </>
   );
}
 
export default Search;