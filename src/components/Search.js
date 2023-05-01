import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search ({ foods }) {
  const [searchFood, setSearchFood ] = useState("")
  const navigate = useNavigate()
  const [isFound, setIsFound] = useState()

  function findFood () {
    const food = foods.find(food => food.name.toLowerCase() === searchFood.toLowerCase())
    if (food) {
      navigate(`/foods/${ food.id }`)
    }
    else {
      setIsFound(false)
    }
  }

  function handleFind(e) {
    setSearchFood(e.target.value)
  }
  
  return ( 
    <>
      <button className='search-btn' onClick={ findFood }>Search</button>
      <input 
        className={isFound === false ? 'search-category invalid' : 'search-category'}
        type="text" 
        value={ searchFood } 
        placeholder='Search Recipe' 
        onChange={ handleFind }
      />
    </>
   );
}
 
export default Search;