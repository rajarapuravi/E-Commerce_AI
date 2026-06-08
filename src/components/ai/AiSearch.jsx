import React, { useState } from "react";
import "./AiSearch.css";

function AiSearch() {
  const [query, setQuery] = useState("");

  return (
    <div className="ai-search-container">
      <h2 className="ai-search-title">
        AI Product Search
      </h2>

      <div className="ai-search-box">
        <input
          type="text"
          className="ai-search-input"
          placeholder="Search laptops, mobiles, headphones..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="ai-search-btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default AiSearch;