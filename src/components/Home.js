import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ categoryImages }) => {

  return (
    <>
      <h1 className='header'>Recipe Book</h1>

      <ul className='main-categories-container'>
        { categoryImages.map(categoryImage => 
          <li key={ categoryImage.name } className='list-home-categories'>
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
