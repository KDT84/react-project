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
        <button 
          className="grocery-print-btn no-print" 
          onClick={() => window.print()}> 🖨️ Print
        </button>

        <h1 className="grocery-list-header">Grocery List 📄</h1> <hr />

        <input 
          type="text" 
          value={newItem} 
          className="input-add-item no-print" 
          placeholder="Enter Item..."
          onChange={handleNewItemChange} 
        />

        <button 
          className="grocery-add-btn no-print"
          onClick={handleAddItem}> + Add Item
        </button>

        {groceryList.map(item => 
          <div key={item} className="grocery-container">
            <button onClick={handleDelete(item)}>❎</button>
            <input type="checkbox" value={item} /> 
            <span className="list-content">{item}</span>
          </div>
        )}<br /> <hr />
      </div>

      <div className="home-btn-grocery">
          <button className="grocery-home-btn no-print" onClick={ () => navigate("/") }> 🏡 Home </button>
      </div>
    </>
  );
}
 
export default GroceryList;