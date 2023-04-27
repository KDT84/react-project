import './App.css';
import { Route, useHistory } from 'react-router-dom';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';


const foods = [
  {
    "id": 1,
    "category": "French",
    "name": "escargot",
    "image": "/img/coffe.jpg",
    "ingredients": [
      {"name": "snail", "amount": "10 pcs"},
      {"name": "butter", "amount": "1 gram"},
      {"name": "oil", "amount": "1 teaspoon"}
    ],
    stepsToCook: [
      {"title": 'Prepare the snails', "description": "Melt 1 tbsp butter in a pan, then add shallot and saute until they soften. Lastly add snails for about 2 minutes."},
      {"title": "make the garlic butter", "description": "In a food processor or blender, add 5 tbsp butter, garlic, parsley, and white wine. Pulse under it all comes together to make a garlic butter."}
    ]
  },
  {
    "id": 2,
    "category": "Japanese",
    "name": "Sushi",
    "image": "/img/coffe.jpg",
    "ingredients": [
      {"name": "ingredient 1", "amount": "10 pcs"},
      {"name": "ingredient 2", "amount": "1 gram"},
      {"name": "ingredient 3", "amount": "1 teaspoon"}
    ],
    stepsToCook: [
      {"title": 'Prepare the snails', "description": "Melt 1 tbsp butter in a pan, then add shallot and saute until they soften. Lastly add snails for about 2 minutes."},
      {"title": "make the garlic butter", "description": "In a food processor or blender, add 5 tbsp butter, garlic, parsley, and white wine. Pulse under it all comes together to make a garlic butter."}
    ]
  },
  {
    
    "id": 3,
    "category": "Korean",
    "name": "Samguypsal",
    "image": "/img/coffe.jpg",
    "ingredients": [
      {"name": "ingredient 1", "amount": "10 pcs"},
      {"name": "ingredient 2", "amount": "1 gram"},
      {"name": "ingredient 3", "amount": "1 teaspoon"}
    ],
    stepsToCook: [
      {"title": 'Prepare the snails', "description": "Melt 1 tbsp butter in a pan, then add shallot and saute until they soften. Lastly add snails for about 2 minutes."},
      {"title": "make the garlic butter", "description": "In a food processor or blender, add 5 tbsp butter, garlic, parsley, and white wine. Pulse under it all comes together to make a garlic butter."}
    ]
  },
  {
    
    "id": 4,
    "category": "Korean",
    "name": "Korean bbq",
    "image": "/img/coffe.jpg",
    "ingredients": [
      {"name": "ingredient 1", "amount": "10 pcs"},
      {"name": "ingredient 2", "amount": "1 gram"},
      {"name": "ingredient 3", "amount": "1 teaspoon"}
    ],
    stepsToCook: [
      {"title": 'Prepare the snails', "description": "Melt 1 tbsp butter in a pan, then add shallot and saute until they soften. Lastly add snails for about 2 minutes."},
      {"title": "make the garlic butter", "description": "In a food processor or blender, add 5 tbsp butter, garlic, parsley, and white wine. Pulse under it all comes together to make a garlic butter."}
    ]
  },
  {
    
    "id": 5,
    "category": "Korean",
    "name": "Korean bbq 2",
    "image": "/img/coffe.jpg",
    "ingredients": [
      {"name": "ingredient 1", "amount": "10 pcs"},
      {"name": "ingredient 2", "amount": "1 gram"},
      {"name": "ingredient 3", "amount": "1 teaspoon"}
    ],
    stepsToCook: [
      {"title": 'Prepare the snails', "description": "Melt 1 tbsp butter in a pan, then add shallot and saute until they soften. Lastly add snails for about 2 minutes."},
      {"title": "make the garlic butter", "description": "In a food processor or blender, add 5 tbsp butter, garlic, parsley, and white wine. Pulse under it all comes together to make a garlic butter."}
    ]
  }
]

function App() {
  return (
    <>    
      <h1>Recipe</h1>

      <Route exact path="/">
        <Home foods={ foods }/>
      </Route>

      <Route path="/foodCategory/:category">
        <FoodCategory foods={ foods }/>
      </Route>

      <Route path="/foods/:id">
        <Cuisine foods={ foods }/>
      </Route>
    </>

  );
}

export default App;
