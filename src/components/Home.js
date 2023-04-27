import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categoryImages }) => {

  // const foodCategories = foods.map(food => food.category)
  // const uniqueFoodCategories = [...new Set(foodCategories)] // new Set() to add a new category 

  return (
    <>
      <h1 className='header'>Recipe Book</h1>

      <ul className='main-categories-container'>
        { categoryImages.map(categoryImage => 
          <li key={ categoryImage.name } className='home-categories'>
            <Link className='category-name' to={ `/foodCategory/${ categoryImage.name }`}>
              { categoryImage.name }
              <img className="category-main-image" src={categoryImage.image} />
            </Link>
          </li>
        )}
      </ul>
    </>
  );
}
 
export default Home;
