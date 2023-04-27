import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ foods }) => {

  const foodCategories = foods.map(food => food.category)
  const uniqueFoodCategories = [...new Set(foodCategories)] // new Set() to add a new category 

  return (
    <>
      <ul className='main-categories'>
        { uniqueFoodCategories.map(category => 
          <li key={ category } className='home-categories'>
            <Link to={ `/foodCategory/${ category }`}>{ category }</Link>
          </li>
        )}
      </ul>
    </>
  );
}
 
export default Home;
