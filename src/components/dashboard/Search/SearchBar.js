// import React from "react";
// import "../Search/SearchBar.css";
// // import SearchIcon from "../../../assets/images/search.png";
// // import CloseIcon from "../../../assets/images/close.png";
// import search_animal from "./search_animal";
// function SearchBarclick() {
 
//   return (
//     <div>
//     <input id="searchbar" onkeyup="search_animal()" type="text" name="search" placeholder="Search animals.."/>
    
//     <ol id='list'>
//         <li class="animals">Cat</li>
//         <li class="animals">Dog</li>
//         <li class="animals">Elephant</li>
       
//     </ol>
      
   
//     {/* <script src="./animals.js"></script> */}
//     <search_animal/>
     
    
//     </div>
//   )
// }

// export default SearchBarclick;
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;