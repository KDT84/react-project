import './App.css';
import { Routes, Route, useHistory } from 'react-router-dom';
import Home from './components/Home';
import FoodCategory from './components/FoodCategory';
import Cuisine from './components/Cuisine';
import CategoryError from './components/CategoryError';

const categoryImages = [
  {
    "name": "French",
    "image": "/img/french/french.jpg"
  },
  {
    "name": "Spanish",
    "image": "/img/spanish/spanish.jpg"
  },
  {
    "name": "Italian",
    "image": "/img/italian/italian.jpg"
  },
  {
    "name": "Korean",
    "image": "/img/korean/korean.jpg"
  },
  {
    "name": "Japanese",
    "image": "/img/japanese/japanese.jpg"
  },
  {
    "name": "Chinese",
    "image": "/img/chinese/chinese.jpg"
  },
  {
    "name": "Filipino",
    "image": "/img/filipino/filipino.jpeg"
  },
  {
    "name": "Thai",
    "image": "/img/thai/thai.jpg"
  },
  {
    "name": "Lebanese",
    "image": "/img/lebanese/lebanese.jpg"
  },
  {
    "name": "Indian",
    "image": "/img/indian/indian.jpg"
  },
  {
    "name": "Vietnamese",
    "image": "/img/vietnamese/vietnamese.jpg"
  },
  {
    "name": "Portuguese",
    "image": "/img/portuguese/portuguese.jpg"
  }
];

const foods = [
  {
    "id": 1,
    "category": "French",
    "name": "Escargot",
    "image": "/img/french/escargo.jpg",
    "ingredients": [
      {"name": "snail", "amount": "12 to 16 pcs"},
      {"name": "unsalted butter", "amount": "1 stick(1/2 cup)"},
      {"name": "table salt", "amount": "3/8 teaspoon"},
      {"name": "finely minced shallot", "amount": "1 1/2 teaspoons"},
      {"name": "finely chopped fresh flat-leaf parseley", "amount": "1 tablespoon"},
      {"name": "black pepper", "amount": "1/4 teaspoon black pepper"},
      {"name": "dry white wine", "amount": "1 tablespoon"},
      {"name": "kosher salt(for stabilizing snail shells)", "amount": "2 cups"},
      {"name": "Accompaniment", "amount": " 6 pcs french bread"}
    ],
    stepsToCook: [
      {"title": 'Step 1:', "description": "Put oven rack in middle position and preheat oven to 450°F."},
      {"title": "Step 2:", "description": "Using a heavy knife, mince and mash garlic to a paste with 1/8 teaspoon table salt."},
      {"title": "Step 3:", "description": "Beat together butter, shallot, garlic paste, parsley, remaining 1/4 teaspoon table salt, and pepper in a small bowl with an electric mixer until combined well. Beat in wine until combined well."},
      {"title": "Step 4:", "description": "Divide half of garlic butter among snail shells. Stuff 1 snail into each shell and top snails with remaining butter. Spread kosher salt in a shallow baking dish and nestle shells, butter sides up, in salt."},
      {"title": "Step 5:", "description": "Bake snails until butter is melted and sizzling, 4 to 6 minutes. Serve immediately."},
    ]
  },
  {
    "id": 2,
    "category": "French",
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
    "category": "French",
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
    "category": "French",
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
    "category": "French",
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
      <Routes>
        <Route exact path="/" element={<Home categoryImages={ categoryImages }/>} /> 
        <Route path="/foodCategory/:category" element={<FoodCategory foods={ foods }/>} errorElement={<CategoryError />}/>
        <Route path="/foods/:id" element={<Cuisine foods={ foods }/>} />
      </Routes>
    </>

  );
}

export default App;

