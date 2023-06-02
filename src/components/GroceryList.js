import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocaStorage from "./useLocalStorage";

function GroceryList() {
  const { get, set } = useLocaStorage('groceryList')
  const [groceryList, setGroceryList] = useState(get())
  const navigate = useNavigate()
  const [newItem, setNewItem] = useState("") 

  function handleNewItemChange(e){
    setNewItem(e.target.value)
  }

  function handleAddItem() {
    const list = new Set([...groceryList, newItem])
    const listArray = [...list]

    setGroceryList(listArray)
    set(listArray)
  }

  function handleDelete(item) {
    
    return function () {
      const filteredGroceryList = groceryList.filter(groceryItem => groceryItem !== item)
      
      setGroceryList(filteredGroceryList)
      set(filteredGroceryList)
    }
  }

  return (
    <>
      <div className="grocery-list-container">
        <button 
          className="grocery-print-btn no-print" 
          onClick={() => window.print()}> 🖨️ Print
        </button>

        <h1 className="grocery-list-header">Grocery List</h1> <hr />

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
            
            <input className="checkbox" type="checkbox" value={item} />
            <span className="list-content">{item}</span>
            <button className="x-btn" onClick={handleDelete(item)}>X</button>

          </div>
        )}<br /> 
      </div>

      <div className="home-btn-grocery">
        <button className="grocery-back-btn no-print" onClick={ () => navigate(-1) }> ⬅️ Back </button>
        <button className="grocery-home-btn no-print" onClick={ () => navigate("/") }> 🏡 Home </button>
      </div>
    </>
  );
}
 
export default GroceryList;