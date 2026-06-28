import { useState } from "react";

const SearchBox = ({ input, setInput }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Coins..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
    </div>
  );
};

export default SearchBox;
