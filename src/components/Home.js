import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Search from './Search';

function Home ({ categories, foods, isLoading })  {

  return (
    <>
    { !isLoading ? 
      <>
        <Search foods={ foods } />
        <h1 className='header'>Recipe Book 📖 </h1> <br />
        <ul className='list-categories-container'>
          { categories.map(category => 
            <li key={ category.name } className='list-home-categories'>
              <Link className='category-name' to={ `/foodCategory/${ category.name }`}>
                { category.name }
                <img className="category-main-image" src={ category.image } alt={ category.name + " food image" }/>
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
