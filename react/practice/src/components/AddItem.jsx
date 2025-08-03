import { useState } from "react";

function AddItem({ setCurrItems }) {
  const [newItem, setnewItem] = useState("");

  function handleChange(e) {
    setnewItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrItems((items) => [
      ...items,
      { id: items.length + 1, item: newItem },
    ]);
    setnewItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new item here"
        value={newItem}
        onChange={handleChange}
      />
      <button type="submit">Click to add new item</button>
    </form>
  );
}

export default AddItem;
