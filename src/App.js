import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';
import React, { useEffect, useState } from 'react';
import GroceryList from './components/GroceryList';

const baseUrl = 'http://localhost:3000'
const foodsUrl = `${baseUrl}/foods`

const categoriesUrl = `${baseUrl}/categories`

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
      .then(data => {
        setFoods(data)
        
        fetch(categoriesUrl)
          .then(res => res.json())
          .then(d => {
            
            setCategories(d)
            setIsLoading(false)
          })
      })
  }

  function upVote(cuisine) {
    fetch(foodsUrl + "/" + cuisine.id, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({upVotes: cuisine.upVotes + 1})
    })
    .then(() => retrieveData())
  }

  function downVote(cuisine) {
    fetch(foodsUrl + "/" + cuisine.id, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({downVotes: cuisine.downVotes + 1})
    })
    .then(() => retrieveData())
  }

  return (
    <> 
      <Routes>
        <Route exact path="/" element={<Home categories={ categories } isLoading={isLoading} foods={foods} />} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory foods={ foods } isLoading={isLoading} upVote={upVote} downVote={downVote}  />} />
        <Route path="/foods/:id" element={<Cuisine foods={ foods } isLoading={isLoading} setGroceryList={setGroceryList}/>} />
        <Route path="/groceryList" element={<GroceryList groceryList={groceryList} setGroceryList={setGroceryList} />} />
      </Routes>
    </>

  );
}

export default App;

