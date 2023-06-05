import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("Produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    });
  }
  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name={itemCategory} onChange={handleCategoryChange}>
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
