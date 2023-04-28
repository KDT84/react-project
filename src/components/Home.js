import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Home = ({ categories, isLoading }) => {

  return (
    <>
    { !isLoading ? 
      <>
        <h1 className='header'>Recipe Book</h1>

        <ul className='main-categories-container'>
          { categories.map(category => 
            <li key={ category.name } className='list-home-categories'>
              <Link className='category-name' to={ `/foodCategory/${ category.name }`}>
                { category.name }
                <img className="category-main-image" src={category.image} alt={category.name + " food image"}/>
              </Link>
            </li>
          )}
        </ul>
      </>
      : 
      <Loading />}
      
    </>
  );
}
 
export default Home;
