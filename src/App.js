import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Recipe from './components/Recipe';
import GroceryList from './components/GroceryList';
import Nopage from './components/Nopage';

// urls
const foodsUrl = "http://localhost:3000/foods"
const categoriesUrl ="http://localhost:3000/categories"

function App() {
  const [categories, setCategories] = useState([])  
  const [foods, setFoods] = useState([])  
  const [isLoading, setIsLoading] = useState(true)  
  const [groceryList, setGroceryList] = useState([]) 

  useEffect(() => { 
    retrieveData()
  }, [])

  function retrieveData() {
    return fetch(foodsUrl)
      .then(res => res.json())
      .then(foodData => {
        setFoods(foodData) 
        
        fetch(categoriesUrl)
          .then(res => res.json())
          .then(categoriesData=> {
            setCategories(categoriesData) 

            setIsLoading(false)
          })
      })
  }
  //routes
  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home categories={categories} foods={foods} isLoading={isLoading}/>} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory categories={categories} foods={foods} isLoading={isLoading} retrieveData={ retrieveData }/>} />
        <Route path="/foods/:id" element={<Recipe foods={foods} setGroceryList={setGroceryList} isLoading={isLoading}/>} />
        <Route path="/groceryList" element={<GroceryList groceryList={groceryList} setGroceryList={setGroceryList} />} />
        <Route path="*" element={<Nopage />}/>
      </Routes>
    </>

  );
}

export default App;

