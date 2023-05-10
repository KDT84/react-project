import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';
import GroceryList from './components/GroceryList';

// urls
const foodsUrl = "http://localhost:3000/foods"
const categoriesUrl ="http://localhost:3000/categories"

function App() {
  const [categories, setCategories] = useState([])  //sets categories_data
  const [foods, setFoods] = useState([])  //sets foods_data
  const [isLoading, setIsLoading] = useState(true)  //displays loading message when fetching
  const [groceryList, setGroceryList] = useState([]) //sets the groceryLIst data

  useEffect(() => { 
    retrieveData()
  }, []) //we use an empty dependency array to make sure it only run once after the initial render.

//fetches the foods and categories data
  function retrieveData() {
    return fetch(foodsUrl)
      .then(res => res.json())
      .then(foodData => {
        setFoods(foodData) //sets the state to a new value(foods) from json data.
        
        fetch(categoriesUrl)
          .then(res => res.json())
          .then(categoriesData=> {
            setCategories(categoriesData) //sets the state to a new value(categories) from json data.
            setIsLoading(false)
          })
      })
  }

  
  //routes
  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home categories={categories} foods={foods} isLoading={isLoading}  />} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory foods={foods} isLoading={isLoading} retrieveData={ retrieveData }/>} />
        <Route path="/foods/:id" element={<Cuisine foods={foods} setGroceryList={setGroceryList} isLoading={isLoading}/>} />
        <Route path="/groceryList" element={<GroceryList groceryList={groceryList} setGroceryList={setGroceryList} />} />
      </Routes>
    </>

  );
}

export default App;

