import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

function onSearchChange(event) {
  setSearch(event.target.value)
}

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  }).filter((item) => {
    if (search === "") {
      return true;
    } else {
      return item.name.toLowerCase().includes(search.toLowerCase());
    }
  }
  );

  return (
    <div className="ShoppingList">
      <ItemForm items={items} setItems={setItems} onItemFormSubmit={handleItemFormSubmit} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Filter search={search} setSearch={setSearch} onSearchChange={onSearchChange}   onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
