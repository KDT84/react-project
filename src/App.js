import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';
import React, { useEffect, useState } from 'react';

const baseUrl = 'http://localhost:3000'
const foodsUrl = `${baseUrl}/foods`
const categoriesUrl = `${baseUrl}/categories`

function App() {
  const [categories, setCategories] = useState([])
  const [foods, setFoods] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(foodsUrl)
      .then(res => res.json())
      .then(data => {
        setFoods(data)
        
        fetch(categoriesUrl)
          .then(res => res.json())
          .then(d => {
            
            setCategories(d)
            setIsLoading(false)
          })
          
      })
  }, [])

  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home categories={ categories } isLoading={isLoading} />} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory foods={ foods } isLoading={isLoading} />} />
        <Route path="/foods/:id" element={<Cuisine foods={ foods } isLoading={isLoading}/>} />
      </Routes>
    </>

  );
}

export default App;

