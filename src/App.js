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
    "cookTime": "30 minutes",
    "prepTime": "10 minutes",
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
    "name": "French Baked Lamb",
    "image": "/img/french/bakedLamb.jpg",
    "cookTime": "2 hours",
    "prepTime": "15 minutes",
    "ingredients": [
      {"name": "potatoes", "amount": "4 pcs"},
      {"name": "olive oil", "amount": "2 tbs"},
      {"name": "lamb chump", "amount": "6 x 200g"},
      {"name": "onion, chopped", "amount": "1 pc"},
      {"name": "carrots, chopped", "amount": "2 pcs"},
      {"name": "rosemary sprigs, leaves finely, chopped", "amount": "2 pcs"},
      {"name": "chicken Stock", "amount": "1/2 cup"},
      {"name": "ardmona pureed", "amount": "1 1/2 cups"}
    ],
    stepsToCook: [
      {"title": "Step 1", "description": "Place potato in a saucepan of cold, salted water. Bring to the boil, then reduce heat to medium and cook for 5-10 minutes until par-cooked. Drain, cool and thinly slice."},
      {"title": "Step 2", "description": "Preheat oven to 190°C. Heat oil in a large fry pan over high heat. Season the lamb, then cook, turning, for 8-10 minutes until browned. Remove from pan and reduce heat to medium."},
      {"title": "Step 3", "description": "Add the onion and carrot, then cook, stirring, for 4-5 minutes until softened. Add the rosemary and cook for a further 1 minute or until fragrant. Add the stock and pasta sauce, scraping the bottom of the pan with a wooden spoon. Bring to a simmer, then season and cook for 3-4 minutes until slightly reduced."},
      {"title": "Step 4", "description": "Place lamb in a baking dish and pour over the tomato sauce. Layer potato over the top and season, then brush with oil. Bake for 1 hour or until potato is golden."},
      {"title": "Step 5", "description": "Rest for 5 minutes, then serve garnished with extra rosemary sprigs."}
    ]
  },

  {
    "id": 3,
    "category": "French",
    "name": "Tartiflette",
    "image": "/img/french/tartiflette.jpg",
    "cookTime": "1.5 hours",
    "prepTime": "15 minutes",
    "ingredients": [
      {"name": "potatoes", "amount": "1.5 kg"},
      {"name": "bacon", "amount": "300 grams"},
      {"name": "large eschalots, thinly sliced", "amount": "3 pcs"},
      {"name": "garlic cloves", "amount": "2 pcs"},
      {"name": "thyme sprigs, leaves picked", "amount": "2 pcs"},
      {"name": "dry white wine", "amount": "1/3 cup (80ml)"},
      {"name": "creme fraiche", "amount": "1/4 cup (60g)"},
      {"name": "chopped flat-leaf parsy leaves", "amount": "2 tbs"},
      {"name": "reblochon cheese", "amount": "250 grams"},
    ],
    stepsToCook: [
      {"title": "Step 1", "description": "Place the potato in a pan of cold, salted water and bring to the boil, then reduce the heat to medium-low and cook for 20-25 minutes or until tender. Drain, then cool slightly and thickly slice."},
      {"title": "Step 2", "description": "Meanwhile, preheat the oven to 190°C. Place speck in a frypan over medium heat and cook for 3 minutes or until the fat has rendered. Add the eschalot and cook, stirring, for 5 minutes or until softened."},
      {"title": "Step 3", "description": "Add the garlic and thyme to the pancetta mixture, then cook for 1 minute or until fragrant. Add the wine, then bring to a simmer and remove from the heat. Stir in the creme fraiche and parsley, then add the potato and gently stir to combine. Season, then transfer mixture to a 20cm x 30cm ovenproof dish. Cut the cheese in half horizontally to make 2 discs, then cut each disc in half to make 4 semi circles. Place cheese on top of the potato mixture, then bake for 25 minutes or until the cheese is melted. Serve immediately."},
    ]
  },

  {
    "id": 4,
    "category": "French",
    "name": "French Duck Confit",
    "image": "/img/french/duckConfit.jpeg",
    "cookTime": "45 minutes",
    "prepTime": "25 minutes",
    "ingredients": [
      {"name": "potatoes", "amount": "1 kg"},
      {"name": "4 confit duck legs", "amount": "4 pcs"},
      {"name": "large eschalots, thinly sliced", "amount": "4 pcs"},
      {"name": "chicken stock", "amount": "1 cup"},
      {"name": "dijon mustard, leaves picked", "amount": "1 tablespoon"},
      {"name": "white wine", "amount": "200 ml"},
      {"name": "tomatoes", "amount": "6 pcs"},
      {"name": "chopped flat-leaf parsy leaves", "amount": "1 tablespoon"},
      {"name": "baby green beans", "amount": "400 grams"},
    ],
    stepsToCook: [
      {"title": "Step 1", "description": "Preheat oven to 200°C. Line a baking tray with baking paper. Place potatoes in a pan of cold, salted water and bring to the boil over medium-high heat. Cook for 8-10 minutes until just tender. Drain well."},
      {"title": "Step 2", "description": "Scrape off excess fat from duck and set aside. Place 2 tablespoons duck fat in a baking dish and melt in the oven for 2 minutes. Toss potatoes in fat and season. Roast potatoes for 10 minutes. Place duck on lined tray and roast with the potatoes for a further 20 minutes, turning potatoes once, until duck and potatoes are crisp and golden."},
      {"title": "Step 3", "description": "Meanwhile, heat 1 tablespoon reserved fat in a pan over a medium heat. Cook eschalot, stirring, for 1 minute until just starting to soften. Add wine and increase heat to high. Simmer for 8-10 minutes until reduced to about 2 tablespoons. Add stock and simmer for a further 6-8 minutes until reduced by half. Whisk in mustard and herbs, then season."},
      {"title": "Step 4", "description": "Cut tomatoes into strips, then toss with beans and half the dressing. Serve with potatoes, duck and remaining dressing."},
    ]
  },

  {
    "id": 5,
    "category": "French",
    "name": "Salmon with Green Olive",
    "image": "/img/french/salmon.jpg",
    "cookTime": "12 minutes",
    "prepTime": "40 minutes",
    "ingredients": [
      {"name": "garlic cloves", "amount": "2 pcs"},
      {"name": "10g brioche", "amount": "100 grams"},
      {"name": "finely grated zest of lemons, thinly sliced", "amount": "2 pcs"},
      {"name": "1 teaspoon lemon thyme leaves", "amount": "1 teaspoon"},
      {"name": "chopped green olives", "amount": "1/4 cup"},
      {"name": "finely grated parmesan", "amount": "2 cups"},
      {"name": "unsalted butter", "amount": "20 grams"},
      {"name": "olive oil", "amount": "1/3 cup"},
      {"name": "skinless salmon", "amount": "180 grams"},
      {"name": "potatoes", "amount": "400 grams"},
      {"name": "steamed green beans", "amount": "6 pcs"},
    ],
    stepsToCook: [
      {"title": "Step 1", "description": "Preheat oven to 200°C. Line a baking tray with baking paper. Place potatoes in a pan of cold, salted water and bring to the boil over medium-high heat. Cook for 8-10 minutes until just tender. Drain well."},
      {"title": "Step 2", "description": "Scrape off excess fat from duck and set aside. Place 2 tablespoons duck fat in a baking dish and melt in the oven for 2 minutes. Toss potatoes in fat and season. Roast potatoes for 10 minutes. Place duck on lined tray and roast with the potatoes for a further 20 minutes, turning potatoes once, until duck and potatoes are crisp and golden."},
      {"title": "Step 3", "description": "Meanwhile, heat 1 tablespoon reserved fat in a pan over a medium heat. Cook eschalot, stirring, for 1 minute until just starting to soften. Add wine and increase heat to high. Simmer for 8-10 minutes until reduced to about 2 tablespoons. Add stock and simmer for a further 6-8 minutes until reduced by half. Whisk in mustard and herbs, then season."},
      {"title": "Step 4", "description": "Cut tomatoes into strips, then toss with beans and half the dressing. Serve with potatoes, duck and remaining dressing."},
    ]
  },
  {
  "id": 6,
  "category": "Spanish",
  "name": "Seafood Paella",
  "image": "/img/spanish/paella.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 7,
  "category": "Spanish",
  "name": "Tortilla",
  "image": "/img/spanish/tortilla.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 8,
  "category": "Spanish",
  "name": "Arroz Al Horno",
  "image": "/img/spanish/arrozAlHorno.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 9,
  "category": "Spanish",
  "name": "Spanish Chicken",
  "image": "/img/spanish/spanishChicken.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 10,
  "category": "Spanish",
  "name": "Chorizo & chickpea Soup",
  "image": "/img/spanish/chorizo.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 11,
  "category": "Italian",
  "name": "Papardelle",
  "image": "/img/italian/papardelle.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 12,
  "category": "Italian",
  "name": "Spinach & Fetta ",
  "image": "/img/italian/spinach.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 13,
  "category": "Italian",
  "name": "Creamy polenta",
  "image": "/img/italian/polenta.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 14,
  "category": "Italian",
  "name": "aubergine traybake",
  "image": "/img/italian/traybake.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 15,
  "category": "Italian",
  "name": "No Yeast Pizza",
  "image": "/img/italian/pizza.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 16,
  "category": "Korean",
  "name": "Bibimbap",
  "image": "/img/korean/bibimbap.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 17,
  "category": "Korean",
  "name": "Korean Spicy Chicken",
  "image": "/img/korean/koreanchicken.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 18,
  "category": "Korean",
  "name": "Korean Beef",
  "image": "/img/korean/koreanbeef.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 19,
  "category": "Korean",
  "name": "Vegan Tteokbokki",
  "image": "/img/korean/vegan-tteokbokki.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 20,
  "category": "Korean",
  "name": "Spicy Eggplant",
  "image": "/img/korean/eggplant.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 21,
  "category": "Japanese",
  "name": "Teriyaki Chicken",
  "image": "/img/japanese/teriyaki.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 22,
  "category": "Japanese",
  "name": "Chicken Karaage",
  "image": "/img/japanese/karage.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 23,
  "category": "Japanese",
  "name": "Oyakdon",
  "image": "/img/japanese/oyakdon.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 24,
  "category": "Japanese",
  "name": "Chicken Katsu",
  "image": "/img/japanese/katsu.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 25,
  "category": "Japanese",
  "name": "Teriyaki Eel",
  "image": "/img/japanese/eel.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 26,
  "category": "Chinese",
  "name": "Dumplings",
  "image": "/img/chinese/dumplings.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 27,
  "category": "Chinese",
  "name": "Beef Stir Fry",
  "image": "/img/chinese/beefstirfry.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 28,
  "category": "Chinese",
  "name": "Beef Stir Fry",
  "image": "/img/chinese/chinesenoodles.jpeg",
    "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 29,
  "category": "Chinese",
  "name": "Sweet n Sour Pork",
  "image": "/img/chinese/sweetnsour.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 30,
  "category": "Chinese",
  "name": "Vegetable Stir Fry",
  "image": "/img/chinese/vegetable.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
"id": 31,
"category": "Filipino",
"name": "Lechon",
"image": "/img/filipino/lechon.jpeg",
"cookTime": "30 minutes",
"prepTime": "10 minutes",
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
  "id": 32,
  "category": "Filipino",
  "name": "Pochero",
  "image": "/img/filipino/pochero.jpg",
    "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 33,
  "category": "Filipino",
  "name": "Caldereta",
  "image": "/img/filipino/caldereta.jpg",
    "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 34,
  "category": "Filipino",
  "name": "Humba",
  "image": "/img/filipino/humba.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 35,
  "category": "Filipino",
  "name": "Fish Kinilaw",
  "image": "/img/filipino/kinilaw.jpg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
  "id": 36,
  "category": "Thai",
  "name": "Pad Thai",
  "image": "/img/thai/padthai.jpeg",
  "cookTime": "30 minutes",
  "prepTime": "10 minutes",
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
    "id": 37,
    "category": "Thai",
    "name": "Curry Chicken",
    "image": "/img/thai/curry.jpg",
    "cookTime": "30 minutes",
    "prepTime": "10 minutes",
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
      "id": 38,
      "category": "Thai",
      "name": "Tom Yum",
      "image": "/img/thai/tomyum.jpeg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 39,
      "category": "Thai",
      "name": "Spring Roll",
      "image": "/img/thai/springroll.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 40,
      "category": "Thai",
      "name": "Chicken Wings",
      "image": "/img/thai/chicken.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 41,
      "category": "Lebanese",
      "name": "Chicken & Chickpeas",
      "image": "/img/lebanese/lebchick.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 42,
      "category": "Lebanese",
      "name": "Eggplant Fatteh",
      "image": "/img/lebanese/fatteh.jpeg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 43,
      "category": "Lebanese",
      "name": "Sausage",
      "image": "/img/lebanese/sausage.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 44,
      "category": "Lebanese",
      "name": "Beef Skewer",
      "image": "/img/lebanese/beefskewer.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 45,
      "category": "Lebanese",
      "name": "Chicken Salad",
      "image": "/img/lebanese/.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 46,
      "category": "Indian",
      "name": "Egg Curry Rice",
      "image": "/img/indian/eggcurry.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 47,
      "category": "Indian",
      "name": "Chicken Saagwala",
      "image": "/img/indian/saagwala.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 48,
      "category": "Indian",
      "name": "Egg Curry Rice",
      "image": "/img/indian/eggcurry.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 49,
      "category": "Indian",
      "name": "Green Curry",
      "image": "/img/indian/indiancurry.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 50,
      "category": "Indian",
      "name": "Butternut Squash Curry",
      "image": "/img/indian/eggcurry.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 51,
      "category": "Vietnamese",
      "name": "Beef Pho",
      "image": "/img/vietnamese/beefpho.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 52,
      "category": "Vietnamese",
      "name": "Chicken Lemon Grass",
      "image": "/img/vietnamese/lemonchicken.jpeg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 53,
      "category": "Vietnamese",
      "name": "Caramel Chicken",
      "image": "/img/vietnamese/caramelchicken.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 54,
      "category": "Vietnamese",
      "name": "Grilled Pork",
      "image": "/img/vietnamese/grilledpork.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 55,
      "category": "Vietnamese",
      "name": "Egg Rolls",
      "image": "/img/vietnamese/eggrolls.jpeg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 56,
      "category": "Portuguese",
      "name": "Baked Octopus",
      "image": "/img/portuguese/bakedoctopus.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 57,
      "category": "Portuguese",
      "name": "Chicken Salad",
      "image": "/img/portuguese/caramelisedsalad.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 58,
      "category": "Portuguese",
      "name": "Grilled Chicken",
      "image": "/img/portuguese/grilledcxn.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 59,
      "category": "Portuguese",
      "name": "Seafood Stew",
      "image": "/img/portuguese/seafoodstew.jpeg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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
      "id": 60,
      "category": "Portuguese",
      "name": "Braised Beef",
      "image": "/img/portuguese/braisedbeef.jpg",
      "cookTime": "30 minutes",
      "prepTime": "10 minutes",
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

