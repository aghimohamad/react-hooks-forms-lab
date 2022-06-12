import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({searchTerm, onSearchChange, onItemFormSubmit}) {
  const [newCategory, setNewCategory] = useState("");


function handleSubmit(event) {
  const newItem = {
    id : items[items.length - 1].id + 1,
    name : searchTerm,
    category : newCategory,
  };
  event.preventDefault();

  onItemFormSubmit(newItem);
}
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select name="category" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
