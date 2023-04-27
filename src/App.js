import './App.css';
import { Routes, Route, useHistory } from 'react-router-dom';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';
import CategoryError from './components/CategoryError';

const categoryImages = [
  {
    "name": "French",
    "image": "/img/french.jpg"
  },
  {
    "name": "Spanish",
    "image": "/img/spain.jpg"
  },
  {
    "name": "Italian",
    "image": "/img/italian.jpg"
  },
  {
    "name": "Korean",
    "image": "/img/korean.jpg"
  },
  {
    "name": "Japanese",
    "image": "/img/japanese.jpg"
  },
  {
    "name": "Chinese",
    "image": "/img/chinese.jpg"
  },
  {
    "name": "Filipino",
    "image": "/img/filipino.jpeg"
  },
  {
    "name": "Thai",
    "image": "/img/thai.jpg"
  }
];

const foods = [
  {
    "id": 1,
    "category": "French",
    "name": "Escargot",
    "categoryImage": "/img/coffe.jpg",
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
    "categoryImage": "/img/coffe.jpg",
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
    "category": "Chinese",
    "name": "Samguypsal",
    "categoryImage": "/img/coffe.jpg",
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
    "categoryImage": "/img/coffe.jpg",
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
    "category": "Italian",
    "name": "Korean bbq 2",
    "categoryImage": "/img/coffe.jpg",
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
    "category": "Thai",
    "name": "Korean bbq 2",
    "categoryImage": "/img/coffe.jpg",
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
    "category": "Filipino",
    "name": "Korean bbq 2",
    "categoryImage": "/img/coffe.jpg",
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
  "category": "Lebanese",
  "name": "Korean bbq 2",
  "categoryImage": "/img/coffe.jpg",
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
]

function App() {
  return (
    <> 
      <h1 className='header'>Recipe Book</h1>
      <Routes>
        <Route exact path="/" element={<Home categoryImages={ categoryImages }/>} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory foods={ foods }/>} errorElement={<CategoryError />}/>
        <Route path="/foods/:id" element={<Cuisine foods={ foods }/>} />
      </Routes>
    </>

  );
}

export default App;

