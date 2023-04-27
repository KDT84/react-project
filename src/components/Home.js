import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categoryImages }) => {

  // const foodCategories = foods.map(food => food.category)
  // const uniqueFoodCategories = [...new Set(foodCategories)] // new Set() to add a new category 

  return (
    <>
      <ul className='main-categories'>
        { categoryImages.map(categoryImage => 
          <li key={ categoryImage.name } className='home-categories'>
            <Link to={ `/foodCategory/${ categoryImage.name }`}>{ categoryImage.name }</Link>
            <img src={categoryImage.image} /> <br />
          </li>
        )}
      </ul>
    </>
  );
}
 
export default Home;
