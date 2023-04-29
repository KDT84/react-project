import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GroceryList({ groceryList, setGroceryList}) {
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState("") 

  function handleNewItemChange(e){
    setNewItem(e.target.value)
  }

  function handleAddItem() {
    setGroceryList([...new Set([...groceryList, newItem])])
  }


  function handleDelete(item) {
    
    return function () {
      setGroceryList(groceryList.filter(groceryItem => groceryItem !== item))
    }
  }

  return (
    <>
      <div className="grocery-list-container">
      <button className="print-list" onClick={() => window.print() }>🖨️ Print</button>
        <h1 className="groceryList  ">Grocery List</h1>
          <input type="text" value={newItem} onChange={handleNewItemChange} className="add-item"/>
          <button onClick={handleAddItem} className="add-btn">+ Add Item</button>
          
          {groceryList.map(item => 
            <div key={item} className="grocery-container">
              <button onClick={handleDelete(item)} style={{width: "30px", height: "20px"}}>❎</button>
              <input type="checkbox" value={item} style={{width: "40px", height: "15px"}}/> 
              <span style={{"color": "black"}}>{item}</span>
            </div>
          )}
          <br />
      </div>

      <div className="home-btn-grocery">
          <button className="cuisine-home-button no-print" onClick={() => navigate("/") }>🏡 Home</button>
      </div>
    </>
  );
}
 
export default GroceryList;