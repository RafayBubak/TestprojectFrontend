import React, { useState } from "react";
import { BiCategory } from "react-icons/bi";
import axios from "axios";

export default function SearchBarComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categories/",
        {
          params: {
            search: searchTerm,
            category: selectedCategory,
          },
        }
      );
      setCategories(response.data);
      console.log("after categories api call",response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="left-c-button">
          <i className="icon">
            <BiCategory />
          </i>
          <span className="Catgtext">Categories</span>
        </div>
        <div className="input-div">
          <input
            className="inputfield"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <select
            className="SearchSelection"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option className="Catdrop" value="ppe">
              {" "}
              PPE{" "}
            </option>
            <option className="Catdrop" value="wellness">
              {" "}
              Wellness{" "}
            </option>
            <option className="Catdrop" value="home_decor">
              {" "}
              Home Decor{" "}
            </option>
            <option className="Catdrop" value="miscellaneous">
              {" "}
              Miscellaneous{" "}
            </option>
          </select>
        </div>
        <div className="searchbutton" onClick={handleSearch}>
          <span>Search</span>
          <i></i>
        </div>
      </div>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <span>{category.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

